import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor() { }
  connection!:HubConnection;

  userId!:string;
  buildConnection(): void {
    this.connection = new HubConnectionBuilder()
    .withUrl(environment.baseUrl+"communicate")
    .build();
    this.connection.start();
  }

  startConnection(): void {
  this.connection.invoke('CreateRoom',"roomId","10").catch((res)=>{
    console.log(res);
  });
  this.connection.on("UserConnected",id=>{
  console.log(id);
  });

}





}
