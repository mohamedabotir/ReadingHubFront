import { Injectable } from '@angular/core';
import { LoaderService } from './LoaderService';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class LoaderInterceptor implements HttpInterceptor{

  constructor(private service:LoaderService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.service.onStartLoading();

  return next.handle(req).pipe(finalize(()=>this.service.onStopLoading()))
  }

}
