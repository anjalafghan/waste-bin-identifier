import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {BarcodePage} from '../../pages/barcode/barcode';


const url = 'http://192.168.43.75:3000/api/wastebin';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
myphoto:any;
photo:any;
errmsg:any;
Latitude: number;
Longitude: number;
param1:string;
private tito: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public geo: Geolocation, private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner, private fb: FormBuilder,
     private http: HttpClient, private ft: FileTransfer  ) {
       this.geo.getCurrentPosition().then( pos => {
         this.Latitude = pos.coords.latitude;
         this.Longitude = pos.coords.longitude;
       }).catch(err => console.log(err));

    this.param1 = navParams.get('param1');
     this.tito = this.fb.group({
       qrdata: [this.param1,Validators.required],
       latitude: ['',Validators.required],
       longitude: ['',Validators.required],
       asset: ['',Validators.required],
       condition: ['',Validators.required],
       date: [Date(), Validators.required],
       pic: [''],
       pic1: [''],
       pic2: [''],
       pic3: [''],
       damage: ['']

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');

  }
  ngOnInit(){
  this.photo = [];
  }
  sub(){

    this.http.post(`${url}/bindata`,this.tito.value).subscribe(data => {
      console.log(data);
      const alert =  this.alertCtrl.create({
       title: 'Success',
        message: 'Submited successfully',
        buttons: ['OK']
      });
     alert.present();
     this.navCtrl.push(BarcodePage,{
     });

  }, err => {
      console.log(err);
      const alert =  this.alertCtrl.create({
        title: 'Failed',
       message: 'Data Cannot Submitted',
      buttons: ['OK']
      });
   alert.present();
  });
  }
  opencamera(){
    if(this.photo.length <= 3){
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
else{
  const alert =  this.alertCtrl.create({
   title: 'Max Limit Reached',
    message: 'Cannot take more than 4 pictures ',
    buttons: ['OK']
  });
 alert.present();
}
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
