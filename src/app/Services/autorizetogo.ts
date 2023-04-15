import { UserService } from 'src/app/Services/user-service.service';
import { Injectable } from "@angular/core";
 import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn:'root'
})
export class AuthorizeToGo implements CanActivate{
  constructor(private userService:UserService,private navigation:Router,private toastr: ToastrService ){

  }
 async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{
  debugger
  try{
    let data=await this.userService.GetUserId()
    debugger
     console.log(data);
    if(data !=undefined)
    return true;
      else{
        this.navigation.navigateByUrl("/login")
      }
    return true;

  }catch{
    this.navigation.navigateByUrl("/login")

  }
  return true;
 }

}
