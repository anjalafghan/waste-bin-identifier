import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Observable } from 'rxjs/Observable'
import { Toast } from '@ionic-native/toast/ngx';
import { HTTP } from '@ionic-native/http/ngx';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
myphoto:any;
photo:any;
// lat:any;
// lng:any;
param1:string;
Latitude: number;
Longitude: number;

  constructor(private toast: Toast,public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public geo: Geolocation, private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner , private http:HTTP) {
    this.param1 = navParams.get('param1');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.geo.getCurrentPosition().then( pos => {
      this.Latitude = pos.coords.latitude;
      this.Longitude = pos.coords.longitude;
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



  sendPostRequest() {
        let url = "http://192.168.43.75:8888/binData";
        let postData = new FormData ();
        postData.append('name','this is name');
        let data : Observable<any> = this.http.post(url,postData);

        data.subscribe( (result)=> {

          this.toast.show(result, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );

        } );



    }





}
