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
export class ProfileResolver implements Resolve<boolean> {

  constructor(private profile:UserService) {


  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.profile.getMyProfile().pipe(
      catchError(()=>{
       return of("no Product")
      })

    )
  }
}
