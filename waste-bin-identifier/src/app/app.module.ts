import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { WelcomePage } from '../pages/welcome/welcome';
import { MainPage } from '../pages/main/main';
import {BarcodePage} from '../pages/barcode/barcode';

import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpModule } from '@angular/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    BarcodePage,
    MainPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    HttpModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    BarcodePage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    BarcodeScanner,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})
export class AppModule {}
