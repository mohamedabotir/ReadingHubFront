import {  PeerJSOption } from './../../../node_modules/peerjs/dist/types.d';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
   import Peer from 'peerjs';
 import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.css']
})
export class CommunicateComponent implements OnInit {



  audioList = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Smaple 1",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      title: "Sample 2",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      title: "Sample 3",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];

  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLAudioElement>;
constructor(){
  this.id = this.initPeer();
}

connectionCode=""


join(): void{
  if(this.connectionCode.length>1)
   this.call(this.connectionCode);
}

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
this.id = this.initPeer();
console.log(this.initPeer());
}

call(connectionId:string): void {
  console.log("s")
navigator.mediaDevices.getUserMedia({video:false,audio:true}).then((stream)=>{

  console.log(this.id);
  const connection = this.peer.connect(connectionId);
  connection.on('error', err => {
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

answer(): void{
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

}



