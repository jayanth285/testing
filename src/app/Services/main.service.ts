import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Observable} from  'rxjs';
import {user_reg} from '../Classes/masterclass';
import {member_reg} from '../Classes/masterclass';
import {pay_data} from '../Classes/masterclass';
import {login} from '../Classes/masterclass';
import {pending} from '../Classes/masterclass';
import {member_edit} from '../Classes/masterclass';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public URL_user_reg:any = "http://127.0.0.1:8000/api/auth/users/";
  public URL_member_reg:any = "http://127.0.0.1:8000/api/auth/member/";
  public URL_member_edit:any = "http://127.0.0.1:8000/api/auth/edit/";
  public URL_payment:any = "http://127.0.0.1:8000/api/auth/payment/";
  public URL_user:any = "http://127.0.0.1:8000/api/auth/login/";
  public URL_member_list:any = "http://127.0.0.1:8000/api/auth/member/";
  public URL_pending_list:any = "http://127.0.0.1:8000/api/auth/pending/";
  public URL_profile:any = "http://127.0.0.1:8000/api/auth/profile/";


  constructor(public http:HttpClient) { }

  //client api

  post_user(user_reg : user_reg, Authtoken: string){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer '+ Authtoken,
    });
    return this.http.post<any>(this.URL_user_reg,{
      email:user_reg.email,
      password:user_reg.password,
      staus:user_reg.status,
    },
      {'headers':httpHeaders});
    }



    post_user1(user_reg : user_reg){

      return this.http.post<any>(this.URL_user_reg,{
        email:user_reg.email,
        password:user_reg.password,
        status:user_reg.status,
        verified:user_reg.verified,
        register_date:user_reg.register_date
      })
      }

    post_member(member_reg : member_reg, Authtoken: string){
      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ Authtoken,
      });
        return this.http.post<any>(this.URL_member_reg,{
          user_id:member_reg.user_id,
          program_id:member_reg.program_id,
          name:member_reg.name,
          location:member_reg.location,
          mobile:member_reg.mobile,
          status:member_reg.status,
          reg_date:member_reg.reg_date,
          cycle_date:member_reg.cycle_date,
        },{'headers':httpHeaders})
        }

        post_payment(pay_data : pay_data, Authtoken: string){
          const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ Authtoken,
          });
          return this.http.post<any>(this.URL_payment,{
            user_id:pay_data.user_id,
            member_id:pay_data.member_id,
            pay_date:pay_data.pay_date
          },{'headers':httpHeaders});
          }


      getuser(login : login){

        const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
         });
          return this.http.post<any>(this.URL_user,{
            email:login.email,
            password:login.password
          },{'headers':httpHeaders});
          }


      getmember(id,token){
        var URL_member_list_id:any = this.URL_member_list + String(id) ;
        const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ token,
             });
        return this.http.post<any>(URL_member_list_id,{
            },{'headers':httpHeaders});
          }

      get_pending(pending : pending,token){
          const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ token,
                 });
          return this.http.post<any>(this.URL_pending_list,{
            user_id:pending.user_id,
            status:pending.status
              },{'headers':httpHeaders});
          }

          get_profile(token:string){
            const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ token,
                  });
            return this.http.post<any>(this.URL_profile,{
                }, {'headers':httpHeaders})
                ;
            }
           edit_member(member_edit : member_edit, Authtoken: string){
              const httpHeaders = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+ Authtoken,
              });
                return this.http.post<any>(this.URL_member_edit,{
                  user_id:member_edit.user_id,
                  member_id:member_edit.member_id,
                  program_id:member_edit.program_id,
                  name:member_edit.name,
                  location:member_edit.location,
                  mobile:member_edit.mobile,
                  status:member_edit.status,
                  reg_date:member_edit.reg_date,
                  cycle_date:member_edit.cycle_date,
                },{'headers':httpHeaders})
                }
}
