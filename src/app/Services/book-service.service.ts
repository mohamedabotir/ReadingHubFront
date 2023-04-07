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
async getAllBooks(page=0){
  var books = await this.http.get(`${this.url}GetAllBooks?pageId=${page}`).toPromise();
return books;
}
GetBookFile(bookId:any){
return `${this.url}GetBookFile?bookId=${bookId}`;
}
async GetBookCount(){
  var count = await this.http.get(`${this.url}GetBookCount`).toPromise()
  return  count;
}
getBook(bookId:number){
return this.http.get(`${this.url}GetBook?bookId=${bookId}`)
}
getBooksStatus(){
  return this.http.get(`${this.url}GetAllBooksStatus`)
}
}
