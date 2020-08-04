import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],

})
export class RegisterPage implements OnInit {
  public regForm: FormGroup;

  constructor(
     public formBuilder: FormBuilder,
     private router: Router,
     public http: HttpService,
     private storage: Storage,
     public alertController: AlertController
  ){
  }

  ngOnInit() {
     this.regForm = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required])],
        mobile: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])],
        confirm_password: ['', Validators.compose([Validators.required])]
    });
  }

  register(){
    console.log(this.regForm.value);
    let body = JSON.stringify(this.regForm.value);
    this.http.call('post','http://oxygen.idgafgroup.com/public/api/register',body).then(
      data=>{
      console.log('chala')
      console.log(data);
      if(data['error'] == false){
        this.storage.set('user',{
          name: this.regForm.value.name,
          email: this.regForm.value.email,
          mobile: this.regForm.value.mobile
        })
        this.router.navigateByUrl('/tabs/tab1');
      }else{
        var messages = Object.keys(data).map(function(key) {
          return [(key), data[key]];
        });
        this.presentAlert(messages);
      }
    },
    err=>{
      console.log(err)
    })
    // this.router.navigateByUrl('/tabs/tab1');
  }
  
  async presentAlert(messages: any) {
    var shown_message: any;
    for(var message of messages){
      shown_message = message[1][0];
    }
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: shown_message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
