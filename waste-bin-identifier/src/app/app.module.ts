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
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    BarcodePage,
    MainPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
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
    FileTransfer,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})
export class AppModule {}
