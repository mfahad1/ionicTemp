import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginComponent } from '../pages/auth/login/login';
import { RegisterComponent } from '../pages/auth/register/register';
import { AreaComponent } from '../pages/mainPages/area/area';
import { SelectMenuComponent } from '../pages/mainPages/selectMenu/selectMenu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccordionListComponent } from '../components/accordion-list/accordion-list';
import { IndicativeRatesComponent } from '../pages/mainPages/indicativeRates/indicativeRates';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

    LoginComponent,
    RegisterComponent,
    AreaComponent,
    SelectMenuComponent,
    AccordionListComponent,
    IndicativeRatesComponent,
  ],
  imports: [
BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,

    LoginComponent,
    RegisterComponent,
    AreaComponent,
    SelectMenuComponent,
    AccordionListComponent,
    IndicativeRatesComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
