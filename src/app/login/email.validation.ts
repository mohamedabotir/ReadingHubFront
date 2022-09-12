import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { delay, map, Observable } from "rxjs";
import {ajax} from 'rxjs/ajax'
import { environment } from "src/environments/environment";

export function ValidateEmail():AsyncValidatorFn{
  return (control:AbstractControl):Observable<ValidationErrors|null>=>{
    return checkEmail(control.value).pipe(map(res=>{
        return res == null? null :{emailExists:true};
    }));
 }
 function checkEmail(email:any):Observable<any>{
  return ajax.getJSON(environment.baseUrl+"api/User/CheckEmail?emailAddress="+email).pipe(delay(1000));
 }

}
