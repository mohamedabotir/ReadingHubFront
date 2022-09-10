import {  DataConnection, PeerJSOption } from './../../../node_modules/peerjs/dist/types.d';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
   import Peer from 'peerjs';
 import { v4 as uuidv4 } from 'uuid';
import { StreamService } from '../Services/stream.service';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.css']
})
export class CommunicateComponent implements OnInit {





  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLAudioElement>;
constructor(public streams:StreamService){
  this.id = this.initPeer();
}

connectionCode=""
public connections!:[];
currentConncetion!:DataConnection;
created = false;
join(): void{
  if(this.connectionCode.length>1){


    if(this.isClosed){
     this.peer.reconnect();
     console.log('reconnect');
    }else{

      //this.initPeer();
      this.streams.ConnectStream(this.connectionCode);
      this.call(this.connectionCode);
    }
  }
}
isClosed = false;
  //peer = new Peer();
peer!:Peer;
  public initPeer(): string {
    if (!this.peer || this.peer.disconnected) {
        const peerJsOptions: PeerJSOption = {
            debug: 3,
            config: {
                iceServers: [
                    {
                        urls: [
                            'stun:stun1.l.google.com:19302',
                            'stun:stun2.l.google.com:19302',
                        ],
                    }]
            }
        };
        try {
            let id = uuidv4();
            console.log(id);

            this.peer = new Peer(id, peerJsOptions);
            return id;
        } catch (error) {
            console.error(error);
            return "";
        }

    }
    return "";
}
id="";

ngOnInit(): void {
  this.streams.buildConnection();
  this.peer.on('close',()=>{

    console.log('being close');
  })
}

call(connectionId:string): void {
  if(this.created){
    this.initPeer();
  }
this.created = true;
navigator.mediaDevices.getUserMedia({video:false,audio:true}).then((stream)=>{

  console.log(this.id);
  this.currentConncetion = this.peer.connect(connectionId);
  this.currentConncetion.on('error', err => {
      console.error(err);

  });
var call = this.peer.call(connectionId,stream);
call.on('stream', (remoteStream) => {
  this.remoteVideo.nativeElement.srcObject = remoteStream
});
}).catch(err=>{
  console.log(err);
});


}

 answer(){
  this.streams.CreateRoom(this.id);
console.log("answer");
      this.peer.on('call', (call) => {

      navigator.mediaDevices.getUserMedia({video:false,audio:true}).then((stream)=>{

          call.answer(stream); // Answer the call with an A/V stream.
          call.on('stream', (remoteStream)=> {
           // this.remoteVideo.nativeElement.srcObject = remoteStream
          });

      }).catch(err=>{
        console.log('Failed to get local stream' ,err);
      });
});
}
getConnections(){


  this.streams.getAllConnection().then(()=>{

    this.streams.streams.asObservable().subscribe(d=>{
      this.connections = d;
      console.log(this.connections);
    })
  });
}
getAll(){
  console.log(this.connections);
}
listen(connection:any){
this.call(connection);
}
cancel(){
  this.isClosed = true;
  this.peer.disconnect();
  this.remoteVideo.nativeElement.srcObject = null;
}
}





