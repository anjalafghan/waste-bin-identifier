import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const url = 'http://localhost:3000/api/wastebin';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient) {}

   dataSend(body){
     this.http.post(`${url}/bindata`, body);
   }

}
