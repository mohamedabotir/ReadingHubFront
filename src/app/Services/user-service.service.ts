import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Credentials } from '../shared/Cradentials';
@Injectable(
)
export class UserService {

  url = environment.baseUrl+"api/"+"User/";
  postUrl = environment.baseUrl+"api/"+"Post/";

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

   getMyProfile(){
    return this.http.get(this.url+"GetMyProfile");
   }
   getMyPosts(page:any){
    return this.http.get(this.postUrl+"GetMyPosts?page="+page);
   }
   postPost(post:string){
    console.log(post)
    return this.http.post(this.postUrl+"Post?content="+post,null);
   }

  }
