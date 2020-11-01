import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AuditService } from './audits/audit.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AuditListComponent } from './Audits/audit-list/audit-list.component';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { requestInterceptorJWT } from './shared/requestinterceptor-jwt';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditListComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( 
      [
        {path:'', redirectTo : "Login", pathMatch: "full" },
        {path:'Audits', component: AuditListComponent},
        {path:'Login', component: LoginComponent},
        //{path: 'audits/audit/new', component: AuditComponent},
        //{path: 'audits/audit/:AuditCode', component: AuditComponent}

      ]
     ),
     HttpClientModule,
     //NgProgressModule
  ],
  providers: [//AuditService, 
              { provide : HTTP_INTERCEPTORS, useClass: requestInterceptorJWT, multi:true},
              //{ provide : HTTP_INTERCEPTORS, useClass: requestInterceptorSpinner, multi:true}
              ],
  bootstrap: [AppComponent]
})

export class AppModule { }
