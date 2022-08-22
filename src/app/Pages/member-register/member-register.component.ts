import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MainService} from '../../Services/main.service';
import {member_reg} from '../../Classes/masterclass';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrls: ['./member-register.component.css']
})
export class MemberRegisterComponent implements OnInit {

  myForm:FormGroup;
  myOtp:FormGroup;
  member = new member_reg;
  regClient:any;
  members : any;
  userdata : any;
  token:any;
  user_id:any;

  constructor(
    private fb: FormBuilder,
    private _mainservice: MainService
    ) {
    this.myForm = fb.group({
      user_id : new FormControl('', [
        Validators.required,
      ]),
      program_id : new FormControl('', [
        Validators.required,
      ]),
      name : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      location : new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      mobile: new FormControl('',[
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          Validators.maxLength(10)
      ]),
      status : new FormControl('', [
        Validators.required,
      ]),
      reg_date : new FormControl('', [
        Validators.required,
      ]),
      cycle_date : new FormControl('', [
        Validators.required,
      ]),
    });

  }

  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata'))
    this.token=this.userdata.token;
    this.user_id = this.userdata.user_id;
    // var id = 31;
    this._mainservice.getmember(this.user_id,this.token).subscribe(data=>{
      this.members = data;
      console.log(this.members)
      });
  }

  onSubmit(e){

    this.member.user_id = e.controls.user_id.value;
    this.member.program_id = e.controls.program_id.value;
    this.member.name = e.controls.name.value;
    this.member.location = e.controls.name.value;
    this.member.mobile = e.controls.mobile.value;
    this.member.status = e.controls.status.value;
    this.member.reg_date = e.controls.reg_date.value;
    this.member.cycle_date = e.controls.cycle_date.value;
    // this.member.register_date = this.formatDate();
    console.log(this.member);
    this._mainservice.post_member(this.member,this.token).subscribe(data=>{
      this.regClient = data;
    });
  }

  // test(){
  //   var d = this.formatDate();
  //   console.log(d)
  // }


 formatDate() {
    let d = new Date();
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();
    return [year, month, day].join('-');
  }

}
