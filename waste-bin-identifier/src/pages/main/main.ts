import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

myphoto     :any;
photo       :any;
Latitude    :number;
Longitude   :number;
param1      :string;

private host: string  =   "http://192.168.0.105:8080/";

  constructor(private _HTTP: HttpClient, private _TOAST:ToastController, public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public geo: Geolocation, private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner ) {

    this.param1 = navParams.get('param1');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');

    this.geo.getCurrentPosition().then( position => {

      this.Latitude = position.coords.latitude;
      this.Longitude = position.coords.longitude;

    }).catch(err => console.log(err));


}

  ngOnInit(){
  this.photo = [];
  }

  opencamera(){
  const options: CameraOptions = {
  quality: 70,
  destinationType     : this.camera.DestinationType.DATA_URL,
  encodingType        : this.camera.EncodingType.JPEG,
  saveToPhotoAlbum    : true,
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

   /**
    * Displays a message to the user
    *
    * @public
    * @method displayNotification
    * @param item    {String}      The message to be displayed
    * @return {None}
    */
   displayNotification(message : string) : void
   {
      let toast = this._TOAST.create({
         message 	: message,
         duration 	: 3000
      });
      toast.present();
   }

submitData()
  {
      // Retrieve form field values, set up the JavaScript map of values to be
      // passed to node/MongoDB and declare the URL that we need to supply to
      // the Angular Http calls
      let image       : any = this.myphoto,
          //name      	: any = this.form.controls['name'].value,
          headers 		: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
          //options     : any	= { Name : name, Image  : image},
          options     : any	= { Image  : image },
          url       	: any = this.host + "api/gallery";

    // Use the HttpClient post method to create a new record
    this._HTTP
    .post(url, options, headers)
    .subscribe((data : any) =>
    {
      // If the request was successful clear the form of data
      // and notify the user
      //this.clearForm();
      this.displayNotification('Data was successfully uploaded');
    },
    (error : any) =>
    {
      console.dir(error);
    });
  }

}
