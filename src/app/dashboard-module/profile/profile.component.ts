import { UserService } from 'src/app/Services/user-service.service';
import { Post } from './../../shared/Post';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { pop } from './publish-post.animation';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faAngry } from '@fortawesome/free-solid-svg-icons';
import { faClover } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations:[pop]
})
export class ProfileComponent implements OnInit {
  emojiList = ['💛','😍','😂','😡','💪','☝','👍','👎','👏','🙌','🙏']
  pop = false;
  exit = faX;
  remaningChar="";
  smile = faSmile;
  angry = faAngry;
  clover = faClover;
  beach = faUmbrellaBeach;
@ViewChild('focus') focusArea: any
constructor(private route:ActivatedRoute,private fb:FormBuilder,private userService:UserService) { }
post = this.fb.group({
  postContent:['',[Validators.min(10),Validators.maxLength(250)]]
});
profileInfo:any;
posts:Post[] = [];
url = environment.baseUrl;
  ngOnInit(): void {
  this.route.data.subscribe(data=>{
this.profileInfo = data['resolve'];
console.log(this.profileInfo);
  });
  this.route.data.subscribe(data=>{
    this.posts = data['myposts'];
    console.log(data);
  })
  }
  poptrue(){

    this.pop = true;

  }
calculateRemaning(){

  return 250 - this.post.get('postContent')?.value.length;
}
addEmoji(emoji:any){
  if(this.calculateRemaning()>0){
    this.post.patchValue({
      'postContent':this.post.get('postContent')?.value + emoji
    })
    console.log(emoji);
  }
}
submit(){
  if(this.post.valid)
this.userService.postPost(this.post.get('postContent')?.value).subscribe(data=>{
this.posts.push({
  id: data as number, postContent: this.post.get('postContent')?.value,
  pictureUrl: '',
  userName: ''
})
});
else alert('Post not valid')
}
}
