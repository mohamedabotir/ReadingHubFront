import { Subject } from 'rxjs';
import { LoaderService } from './LoaderService';
import { Component, OnInit } from '@angular/core';
@Component({
  selector:'loader-Component',
  templateUrl:'./LoaderComponent.html',
  styleUrls:['./LoaderComponent.css']
 })
export class LoaderComponent implements OnInit{
isLoading! :Subject<boolean>;
constructor(private service:LoaderService) {

}
  ngOnInit(): void {
this.isLoading = this.service.onLoad;
  }
}
