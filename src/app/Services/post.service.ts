import { environment } from './../../environments/environment';
import { Post } from './../shared/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  api = environment.baseUrl+"api/Post/";
  constructor(private http:HttpClient) { }
  UpdatePost(post:Post){
    return this.http.put(this.api+"UpdatePost",post);
  }
  deletePost(postId:any){
    return this.http.delete(this.api+"DeletePost?postId="+postId);
  }
}
