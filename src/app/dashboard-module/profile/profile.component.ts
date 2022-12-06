import { PostService } from './../../Services/post.service';
import { UserService } from 'src/app/Services/user-service.service';
import { Post } from './../../shared/Post';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { pop } from './publish-post.animation';
import { faSun, faX } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faAngry } from '@fortawesome/free-solid-svg-icons';
import { faClover } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
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
  setting = faCloudSun;
  settingDisplay = false;
  editIndex = -1;
@ViewChild('focus') focusArea: any
constructor(private postService:PostService,private route:ActivatedRoute,private fb:UntypedFormBuilder,private userService:UserService) { }
post = this.fb.group({
  postContent:['',[Validators.min(10),Validators.maxLength(250)]]
});
editPost = this.fb.group({
  id:[],
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
calculateRemaningEdit(){

  return 250 - this.editPost.get('postContent')?.value.length;
}
addEmoji(emoji:any){
  if(this.calculateRemaning()>0){
    this.post.patchValue({
      'postContent':this.post.get('postContent')?.value + emoji
    })
    console.log(emoji);
  }
}

addEmojiEdit(emoji:any){
  if(this.calculateRemaning()>0){
    this.editPost.patchValue({
      'postContent':this.editPost.get('postContent')?.value + emoji
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
edit(index:any){
  this.editIndex = index;
  this.editPost.patchValue({
    id:this.posts[index].id,
    postContent:this.posts[index].postContent
  })
console.log(this.posts[index]);

}
onEdit(){
  this.postService.UpdatePost(this.editPost.value).subscribe(data=>{
    if(data == true){
      this.posts[this.editIndex].postContent = this.editPost.value.postContent;
      alert('Edited Successfully')
    }
  });
}
delete(index:any){
  let id =this.posts[index].id;
 this.postService.deletePost(id).subscribe((data)=>{
if((data as unknown as boolean) == true){
  this.posts.splice(index,1);
  alert('Deleted Successfully')
}
});
}

}
