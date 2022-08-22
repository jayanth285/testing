import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {user_reg} from '../../Classes/masterclass';
import {MainService} from '../../Services/main.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup;
  myOtp:FormGroup;
  user = new user_reg;
  regClient:any;


  constructor(
    private fb: FormBuilder,
    private _userpost: MainService
    ) {
    this.myForm = fb.group({
      email: new FormControl('',[Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required,
        Validators.minLength(6),
        Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'),
        Validators.maxLength(10)]),
      confirmpassword: new FormControl('',[Validators.required,
          Validators.minLength(6),
          Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'),
          Validators.maxLength(10)]),
      // mobile: new FormControl('',[Validators.required,
      //     Validators.minLength(10),
      //     Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      //     Validators.maxLength(10)]),
    });
    // this.myOtp = fb.group({
    //   otp: new FormControl('',[Validators.required,
    //     Validators.minLength(4),
    //     Validators.maxLength(4)]),
    // })
  }

  ngOnInit(): void {
  }

  onSubmit(e){

    this.user.email = e.controls.email.value;
    this.user.password = e.controls.password.value;
    this.user.status = "A";
    this.user.verified = "Y";
    this.user.register_date = this.formatDate();
    this._userpost.post_user1(this.user).subscribe(data=>{
      this.regClient = data;
      console.log(this.regClient);
    });
  }



 formatDate() {
    let d = new Date();
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();
    return [year, month, day].join('-');
  }

}
