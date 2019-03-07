import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BarcodePage } from '../barcode/barcode';
const url = 'http://192.168.43.153:3000/api/wastebin';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  private loginform: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder,private http: HttpClient) {
  this.loginform = this.fb.group({
    username: ['',Validators.required],
    password: ['']
  });
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
   
  }
  login(){
  this.http.post(`${url}/bindata`,this.loginform.value).subscribe(data => {
     console.log(data);
     
  }, err => {
      console.log(err);

  });
  setTimeout(() =>{
    this.navCtrl.push(BarcodePage);
 }, 2000);
  }

}
