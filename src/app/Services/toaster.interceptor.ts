import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { ToastrService } from "ngx-toastr"
@Injectable({providedIn:'root'})
export class ToasterInterceptor implements HttpInterceptor {

  constructor(private toaster:ToastrService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap(res=>{
       if(res instanceof HttpResponse){
        if(res.status == 200 )
          this.toaster.success(res.body["message"]??"success request")
       }

    }),catchError((err)=>{

      if(err.status === 404)
      {
        this.toaster.error("NotFound");
     }
      else if(err.status === 400)
      {
        this.toaster.error("Can't Processed yout request");
     }

      return throwError(err);

    }));
  }
}{


}
