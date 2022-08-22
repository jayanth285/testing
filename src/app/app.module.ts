import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { MemberRegisterComponent } from './Pages/member-register/member-register.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { PendingComponent } from './Pages/pending/pending.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MemberProfileComponent } from './Pages/member-profile/member-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { MemberEditComponent } from './Pages/member-edit/member-edit.component';
import { SearchfilterPipe } from './Pipes/searchfilter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './Pages/nav/nav.component';
import { FootbarComponent } from './Pages/footbar/footbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MemberRegisterComponent,
    PaymentComponent,
    PendingComponent,
    ProfileComponent,
    MemberProfileComponent,
    HomeComponent,
    MemberEditComponent,
    SearchfilterPipe,
    NavComponent,
    FootbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
