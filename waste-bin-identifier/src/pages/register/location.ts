//get location coding this file you can paste it.
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from ‘@ionic-native/native-geocoder’;

@IonicPage()
@Component({
selector: ‘page-register’,
templateUrl: ‘register.html’,
})
export class RegisterPage {
//declare the variable
data:any = {};
public deviceInfo: deviceInterface = {};
loading: any;
public lat:number;
public lng:number;

//parameters are used to geolocation.
constructer(public nativeGeocoder: NativeGeocoder,public geolocation: Geolocation){
}
//Get a location
this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((resp) => {
this.lat= resp.coords.latitude;
this.lng= resp.coords.longitude;
console.log(this.lat);
console.log(this.lng);
this.reverseGeocoding(this.lat,this.lng);
}).catch((error) => {
console.log(‘Error getting location’, error);
});
}

//lat and lng conversion of original address.
reverseGeocoding(lat,lng){
let options: NativeGeocoderOptions = {
useLocale: false,
maxResults: 2
};
this.nativeGeocoder.reverseGeocode(lat,lng,options)
.then((result: NativeGeocoderReverseResult) =>{
this.data.addrss= result[1].subLocality +","+ result[1].locality +","+
result[1].subAdministrativeArea +","+ result[1].administrativeArea +"-"+
result[1].postalCode +","+result[1].countryName;
console.log(this.data.addrss);
alert(JSON.stringify(this.data.addrss));
}).catch((error: any) => console.log(error));
}
its 
