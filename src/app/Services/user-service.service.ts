import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable(
)
export class UserService {

  url = environment.baseUrl+"api/"+"User/";
  constructor(private http:HttpClient) { }
  GetAuthors(){
    return this.http.get(this.url+"GetUsersProfiles");
   }
}
