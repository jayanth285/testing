import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MainService} from '../../Services/main.service';
import {member_reg} from '../../Classes/masterclass';
import {member_edit} from '../../Classes/masterclass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  myForm:FormGroup;
  myOtp:FormGroup;
  member = new member_edit;
  regClient:any;
  members : any;
  userdata : any;
  token:any;
  term: string;
  user_id:any;
  memberdata :any;


  constructor(
    private fb: FormBuilder,
    private _mainservice: MainService,
    private router: Router
    ) {
    this.myForm = fb.group({
      user_id : new FormControl('', [
        Validators.required,
      ]),
      member_id : new FormControl('', [
        Validators.required,
        Validators.min(1),
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
    this.userdata = JSON.parse(sessionStorage.getItem('userdata'));
    this.memberdata = JSON.parse(sessionStorage.getItem('memberdata'));
    console.log(this.memberdata);
    this.token=this.userdata.token;
    this.user_id = this.userdata.user_id;
    // var id = 31;
    this._mainservice.getmember(this.user_id,this.token).subscribe(data=>{
      this.members = data;
      });
  }

  onSubmit(e){

    this.member.user_id = this.user_id;
    this.member.member_id = e.controls.member_id.value;
    this.member.program_id = e.controls.program_id.value;
    this.member.name = e.controls.name.value;
    this.member.location = e.controls.name.value;
    this.member.mobile = e.controls.mobile.value;
    this.member.status = e.controls.status.value;
    this.member.reg_date = e.controls.reg_date.value;
    this.member.cycle_date = e.controls.cycle_date.value;
    // this.member.register_date = this.formatDate();
    this._mainservice.edit_member(this.member,this.token).subscribe(data=>{
      this.regClient = data;
      console.log(this.regClient)
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
