import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {user_reg} from '../../Classes/masterclass';
import {MainService} from '../../Services/main.service';
import {pay_data} from '../../Classes/masterclass';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  myForm:FormGroup;
  payment = new pay_data;
  regClient:any;
  userdata:any;
  token:any;
  members:any;
  user_id:any;

  constructor(
    private fb: FormBuilder,
    private _mainservice: MainService
    ) {
    this.myForm = fb.group({
      user_id : new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1),
      ]),
      member_id : new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.min(1),
      ]),
      pay_date : new FormControl('', [
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

    this.payment.user_id = e.controls.user_id.value;
    this.payment.member_id = e.controls.member_id.value;
    this.payment.pay_date = e.controls.pay_date.value;
    console.log(this.payment)
    this._mainservice.post_payment(this.payment, this.token).subscribe(data=>{
      this.regClient = data;
      console.log(this.regClient)
    });

  }

  test(){
    var d = this.formatDate();
    console.log(d)
  }


 formatDate() {
    let d = new Date();
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();
    return [year, month, day].join('-');
  }

}
