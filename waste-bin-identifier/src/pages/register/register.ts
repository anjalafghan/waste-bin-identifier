import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  myphoto:any;
  photo:any;
  num:string;
  lat:any;
  lng:any;
  Latitude: number;
  Longitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public geo: Geolocation, private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner ) {

  }

  scan() {
    this.barcodeScanner.scan().then(data => {
        // this is called when a barcode is found
        this.num = data.text
        this.Latitude = this.lat;
        this.Longitude = this.lng;
      });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.geo.getCurrentPosition().then( pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;
        }).catch(err => console.log(err));
  }

  ngOnInit(){
    this.photo = [];
  }

  opencamera(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

  this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):

  this.myphoto = 'data:image/jpg;base64,' + imageData;
  this.photo.push(this.myphoto);
  this.photo.reverse();
  }, (err) => {
  // Handle error
  });
  }

  deletephoto(index){
    const confirm = this.alertCtrl.create({
        title: 'Delete ?',
        message: 'Do you want to Delete the Picture?',
        buttons: [
          {
            text: 'No',
            handler: () => {
            }
          },
          {
            text: 'Yes',
            handler: () => {
            this.photo.splice(index,1);
           }
         }
       ]
     });
     confirm.present();
  }
}
