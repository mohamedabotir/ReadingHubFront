import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Credentials } from '../shared/Cradentials';
@Injectable(
)
export class UserService {

  url = environment.baseUrl+"api/"+"User/";
  constructor(private http:HttpClient) { }
  GetAuthors(){
    return this.http.get(this.url+"GetUsersProfiles");
   }

   Login(Credentials:Credentials){
   return  this.http.post(this.url+"Login",Credentials);
   }
   async GetUserId(){
    return  this.http.get(this.url+"GetUserId").toPromise();
   }
}
