import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {login} from '../../Classes/masterclass';
import {pending} from '../../Classes/masterclass';
import {MainService} from '../../Services/main.service'

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  myForm:FormGroup;
  status:any;
  pending_data = new pending;
  pending:any;
  userdata:any;
  token:any;
  members:any;
  id:any;
  term:string;


  constructor(
    private fb: FormBuilder,
    private _mainservice :MainService
    ) {
    this.myForm = fb.group({
      status: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata'))
    this.token=this.userdata.token;
    this.id = this.userdata.user_id;
    // var id = 31;
    // this._mainservice.getmember(id,this.token).subscribe(data=>{
    //   this.members = data;
    //   console.log(this.members)
    //   });
  }

  onSubmit(e){
    this.pending_data.status = e.controls.status.value;
    this.pending_data.user_id = this.id;
    this._mainservice.get_pending(this.pending_data,this.token).subscribe(data=>{
    this.pending = data;
    console.log(this.pending)
    });


  }

}
