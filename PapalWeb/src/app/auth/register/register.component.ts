import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { UserValidator } from './username.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public form = new FormGroup(
  {
username:new FormControl("",[
  Validators.required,Validators.minLength(6),
  Validators.pattern("^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$"),
  UserValidator.dontGiveTheWhiteSpace,
  ]),
password:new FormControl("",Validators.required),
email:new FormControl("",Validators.required),
phone:new FormControl("",Validators.required),
  });
  get username(){
    return this.form.get("username");
  }
  get password(){
    return this.form.get("password");
  }
  get email(){
    return this.form.get("email");
  }
  get phone(){
    return this.form.get("phone");
  }
}
