import { UserService } from 'src/app/Services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSerive:UserService,private fb:UntypedFormBuilder) { }
  loginForm = this.fb.group({
  Email:['',[Validators.required,
    Validators.minLength(5),
    Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  ],

],
  Password:['',[Validators.required,Validators.min(8),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]]
});
  ngOnInit(): void {

  }
   login(){
    console.log(this.loginForm);
    if(!this.loginForm.invalid){

      this.userSerive.Login(this.loginForm.value).subscribe(data=>{
        if(data!=null)
        localStorage.setItem('token',data.toString());

      });
    }
    else
    console.log(this.loginForm);
   }
   checkPassword(){
    if(this.loginForm.controls['Password'].invalid)
    if(this.loginForm.controls['Password']?.errors!['pattern']){
      return this.loginForm.controls['Password'].touched&&this.loginForm.controls['Password'].dirty
    }

    return false;
   }
   checkEmail(){
    if(this.loginForm.controls['Email'].invalid)
    if(this.loginForm.controls['Email']?.errors!['pattern']){
      return this.loginForm.controls['Email'].touched&&this.loginForm.controls['Email'].dirty;
    }

    return false;
   }
}
