import { UserService } from 'src/app/Services/user-service.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyPostsResolver implements Resolve<boolean> {
  constructor(private user:UserService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.user.getMyPosts(0).pipe(
      catchError(()=>{
        return of("no Posts")
       })

    );
  }
}
