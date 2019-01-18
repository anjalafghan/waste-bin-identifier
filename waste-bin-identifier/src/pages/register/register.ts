import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
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

products: any[] = [];
selectedProduct: any;
productFound:boolean = false;

    constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,
  private toast: Toast,
  public dataService: DataServiceProvider public navParams: NavParams, private camera: Camera ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  opencamera(){
   const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

scan() {
  this.selectedProduct = {};
  this.barcodeScanner.scan().then((barcodeData) => {
    this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
    if(this.selectedProduct !== undefined) {
      this.productFound = true;
    } else {
      this.productFound = false;
      this.toast.show(`Product not found`, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    }
  }, (err) => {
    this.toast.show(err, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  });
}

this.dataService.getProducts()
  .subscribe((response)=> {
      this.products = response
      console.log(this.products);
  });

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 this.myphoto = 'data:image/jpg;base64,' + imageData;
}, (err) => {
 // Handle error
});
  }
}
