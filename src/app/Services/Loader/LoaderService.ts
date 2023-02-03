import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable(
{
  providedIn:'root'
})
export class LoaderService{
onLoad =new Subject<boolean>;

onStartLoading(){
  this.onLoad.next(true);
}
onStopLoading(){
  this.onLoad.next(false);
}
}
