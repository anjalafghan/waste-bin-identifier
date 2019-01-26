import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MainPage } from '../main/main';
/**
 * Generated class for the BarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  public viewCtrl: ViewController;
  num:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }
  scan() {

    this.barcodeScanner.scan().then(data => {

        // this is called when a barcode is found
        this.num = data.text
        this.navCtrl.push(MainPage,{
          param1: this.num
        });

        // this.navCtrl.push(RegisterPage);

      });
  }

}
