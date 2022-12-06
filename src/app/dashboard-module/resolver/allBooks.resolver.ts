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
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.bookService.getAllBooks().pipe(
      catchError(()=>{
        return "No Books"
      })
    );
  }
}
