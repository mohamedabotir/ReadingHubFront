import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { UserService } from 'src/app/Services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorResolverResolver implements Resolve<boolean> {

  constructor(private userService:UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    var data ;
    this.userService.GetAuthors().subscribe(d=>{
      data = d;
    })
    return this.userService.GetAuthors().pipe(
      catchError(()=>{
       return of("no Product")
      })

    )
  }
}
