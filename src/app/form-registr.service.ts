import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FormRegistrService {

 _Url='';
  constructor(private _http:HttpClient) { }
  enroll(user:User){
    console.log('user....',user);
    return this._http.post<any>(this._Url,user); 
  }


    getDetails(){
      return this._http.get<any>(`https://dummy.restapiexample.com/api/v1/employees`); 
    }
}
