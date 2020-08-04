import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
// import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

public loginForm : FormGroup;

  constructor(
    public toastController: ToastController,
    public formBuilder: FormBuilder,
    private router: Router,
    public http: HttpService,
    private storage: Storage,
    // public alertController: AlertController
    
  ) {

   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        
        email: ['', Validators.compose([Validators.required])],
        
        password: ['', Validators.compose([Validators.required])]
        
    });
  }

  login(){
    console.log(this.loginForm.value);
    let body = JSON.stringify(this.loginForm.value);
    console.log(body)
    this.http.call('post','http://oxygen.idgafgroup.com/public/api/login',body).then(data=>{
      // this.http.call('post','http://www.nyodlabs.com/original-oxygen-api/public/api/login',body).then(data=>{
      console.log(data);
      if(data['error'] == false){
        console.log(data);
        console.log('test');
        this.storage.set('user',{
          name: data['response'].username,
          email: data['response'].email,
          mobile: data['response'].mobile
        })
        this.showToast();
        this.router.navigateByUrl('/tabs');
      }else{
        // this.presentAlert("messages");
        this.showErrorToast();
      }   
    })
    // this.router.navigateByUrl('/tabs/tab1');
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'User logged in successfully.',
      duration: 2000
    });
    toast.present();
  }

  async showErrorToast() {
    const toast = await this.toastController.create({
      message: 'Enter correct email and password.',
      duration: 2000
    });
    toast.present();
  }

  goToRegister(){
    this.router.navigateByUrl('/register');
  }
  
  // async presentAlert(messages: any) {
  //   console.log(messages)
  //   var shown_message: any;
  //   for(var message of messages){
  //     console.log(message);
  //     shown_message = message[1][0];
  //   }
  //   console.log(shown_message);
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Subtitle',
  //     message: shown_message,
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

}
