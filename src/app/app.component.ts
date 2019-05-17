import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cvs',
      url: '/cvs',
      icon: 'document'
    },
    {
      title: 'Jobs',
      url: '/jobs',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // let status bar overlay webview
      this.statusBar.overlaysWebView(true);
      if(window.statusbar) {
        this.statusBar.hide();
      }

      // set status bar to white
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();
    });
  }
}
