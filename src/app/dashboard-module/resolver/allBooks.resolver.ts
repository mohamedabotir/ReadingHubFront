import { BookService } from '../../Services/book-service.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class allBooksResolver implements Resolve<boolean> {

  constructor(private bookService:BookService) {


  }
   async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    var booksMode = {
      booksCount: await this.bookService.GetBookCount(),
      books: await this.bookService.getAllBooks(0)
      }

      return booksMode;

  }
}
