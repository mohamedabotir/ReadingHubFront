import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor() { }

 public streams = new BehaviorSubject<[]>([]);
  connection!:HubConnection;

  userId!:string;
   buildConnection() {
    this.connection = new HubConnectionBuilder()
    .withUrl(environment.baseUrl+"communicate")
    .build();
    return this.connection.start().then(
      ()=>this.connection
      .on("UserConnected",id=>{
       console.log(id);
  })).then(()=>{
    this.connection.on("GetConnections",connection=>{
      this.streams.next(connection);
      console.log(connection);
 })
  });
  }

   CreateRoom(roomId:any): void {
  this.connection.invoke('CreateRoom',roomId,"10").catch((res)=>{
    console.log(res);
  });

//9ca23d37-4d2f-44fe-81a6-86377031ed08
}
ConnectStream(roomId:any){
  console.log("======"+roomId)
this.connection.invoke("Connect",roomId,"10").then((e)=>{
  console.log(e);
  this.connection.on("UserConnected",function (e: any) {
      console.log(e);
    })
}).catch(e=>{
  console.log(e)
})
}

getStreams (){
  return this.streams;
}
setStream(stram:any){
  this.streams.next(stram);
}
getAllConnection(){
 return this.connection.invoke("GetRooms");
}



}
