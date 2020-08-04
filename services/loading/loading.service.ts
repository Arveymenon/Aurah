import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loader: any;
  constructor(
    public loadingController: LoadingController
  ) {
  }
  
  async create(){
    // this.loadingController = document.querySelector('ion-loading-controller');
    // await this.loadingController.componentOnReady();
  
    this.loader = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
  
    });
    return this.loader.present();
  }
  async dismiss(){
    this.loader.dismiss()
  }
}
