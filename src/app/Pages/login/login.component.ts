import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {login} from '../../Classes/masterclass';
import {userdata} from '../../Classes/masterclass';
import {MainService} from '../../Services/main.service';
import { Router, RouterModule } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token : string;
  details:any;
  myForm:FormGroup;
  username:any;
  password:any;
  login = new login;
  session = new userdata;
  user:any;
  show: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _mainservice :MainService
    ) {
    this.myForm = fb.group({
      email: new FormControl('',[Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        Validators.email]),
      password: new FormControl('',[Validators.required,
        Validators.minLength(6),
        Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'),
        Validators.maxLength(10)
      ]),
    })
  }

  ngOnInit(): void {
  }

  passwordbtn() {
    this.show = !this.show;
      }

  onSubmit(e){
    this.login.email = e.controls.email.value;
    this.login.password = e.controls.password.value;
    this._mainservice.getuser(this.login).subscribe(data=>{
    this.user = data;
    this.token = this.user['access_token'];
    this._mainservice.get_profile(this.token).subscribe(data=>{
      this.details = data;
      console.log(this.details)
      this.session.user_id=this.details["id"];
      this.session.status=this.details["status"];
      this.session.token=this.token;
      sessionStorage.setItem('userdata',JSON.stringify(this.session));
      console.log(this.session);
      if (this.session.user_id >=0){
        this.router.navigate(["/home"]);
      }
    });

    });


  }

}
