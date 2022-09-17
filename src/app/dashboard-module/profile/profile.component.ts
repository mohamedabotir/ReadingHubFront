import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { pop } from './publish-post.animation';
import { faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations:[pop]
})
export class ProfileComponent implements OnInit {
  pop = false;
  exit = faX;
  remaningChar="";
@ViewChild('focus') focusArea: any
  constructor(private route:ActivatedRoute) { }
profileInfo:any;
url = environment.baseUrl;
  ngOnInit(): void {
  this.route.data.subscribe(data=>{
this.profileInfo = data['resolve'];
console.log(this.profileInfo);
  });
  }
  poptrue(){

    this.pop = true;

  }
calculateRemaning(){
  return 250- this.remaningChar.length;
}
}
