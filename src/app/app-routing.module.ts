import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/Pages/login/login.component';
import {RegisterComponent} from '../app/Pages/register/register.component';
import {MemberRegisterComponent} from './Pages/member-register/member-register.component';
import {PaymentComponent} from './Pages/payment/payment.component';
import {MemberProfileComponent} from './Pages/member-profile/member-profile.component';
import {PendingComponent} from './Pages/pending/pending.component';
import {HomeComponent} from './Pages/home/home.component';
import {MemberEditComponent} from './Pages/member-edit/member-edit.component';
import {NavComponent} from './Pages/nav/nav.component';
import {FootbarComponent} from './Pages/footbar/footbar.component'


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'signup', component: RegisterComponent},
  {path : 'register', component: MemberRegisterComponent},
  {path : 'payment', component: PaymentComponent},
  {path : 'members', component: MemberProfileComponent},
  {path : 'pending', component: PendingComponent},
  {path : 'home', component: HomeComponent},
  {path : 'edit', component: MemberEditComponent},
  {path : 'nav', component: NavComponent},
  {path : 'foot', component: FootbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
