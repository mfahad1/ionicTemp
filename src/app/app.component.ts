import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginComponent } from '../pages/auth/login/login';
import { RegisterComponent } from '../pages/auth/register/register';
import { AreaComponent } from '../pages/mainPages/area/area';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginComponent;
  // rootPage: any = AreaComponent;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Login', component: LoginComponent },
      // { title: 'Register', component: RegisterComponent },
      // { title: 'Area', component: AreaComponent },

      { title: 'Indicative Rates', component: AreaComponent },
      { title: 'BTK Maps', component: AreaComponent },
      { title: 'BTK News', component: AreaComponent },
      { title: 'Contact Us', component: AreaComponent },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
