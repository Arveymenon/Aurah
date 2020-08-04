import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

declare var vgHls;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // let status bar overlay webview
      this.statusBar.overlaysWebView(true);

      this.statusBar.backgroundColorByHexString('#000');
      this.statusBar.styleBlackTranslucent();

      // this.router.navigateByUrl('/landing');
        this.storage.get('user').then(
          data=>{
            console.log(data);
            if(data.email){
              this.router.navigateByUrl('/tabs');
            }else{
              this.router.navigateByUrl('/landing');
            }
          },
          error=>{
            console.log(error);
            this.router.navigateByUrl('/landing');
          }
          )
      });
    }
  }
