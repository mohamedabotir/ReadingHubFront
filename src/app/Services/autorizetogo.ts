import { UserService } from 'src/app/Services/user-service.service';
import { Injectable } from "@angular/core";
 import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class AuthorizeToGo implements CanActivate{
  constructor(private userService:UserService){

  }
 async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{
    let data=await this.userService.GetUserId()
     console.log(data);
    if(data !=undefined)
    return true;

    return true;
  }

}
