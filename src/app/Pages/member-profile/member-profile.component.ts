import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {login} from '../../Classes/masterclass';
import {member_edit} from '../../Classes/masterclass';
import {MainService} from '../../Services/main.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {
members : any;
userdata : any;
session2 = new member_edit
token:any;
term: string;
  constructor(
    private _mainservice :MainService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.userdata = JSON.parse(sessionStorage.getItem('userdata'))
    this.token=this.userdata.token;
    var id = this.userdata.user_id;
    this.session2.user_id = id;
    // var id = 31;
    this._mainservice.getmember(id,this.token).subscribe(data=>{
      this.members = data;
      // console.log(this.members)
      });
  }

  edit(e){
    var member_detail = this.members.filter(function(item){
      return item.member_id == e;
  });
  // console.log(member_detail);
  this.session2.member_id =e;
  this.session2.status = member_detail[0].status;
  this.session2.name =member_detail[0].name;
  this.session2.mobile =member_detail[0].mobile;
  this.session2.location =member_detail[0].location;
  this.session2.program_id =member_detail[0].program_id;
  this.session2.cycle_date =member_detail[0].cycle_date;
  this.session2.reg_date=member_detail[0].reg_date;
  sessionStorage.setItem('memberdata',JSON.stringify(this.session2));
  // console.log(this.session2)
  this.router.navigateByUrl('/edit');
  }

}
