import { Book } from './../shared/Book';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
url = environment.baseUrl+"api/Book/";
  constructor(private http:HttpClient) { }

publishBook(book:any){
  return this.http.post(this.url+"PublishBook",book);
}
editBook(book:any){
  return this.http.put(this.url+"UpdateBook",book);
}
getMyBooks(){
return this.http.get(this.url+"GetMyBooks");
}
getAllBooks(page=0){
return this.http.get(`${this.url}GetAllBooks`)
}
GetBookFile(bookId:any){
return `${this.url}GetBookFile?bookId=${bookId}`;
}
}
