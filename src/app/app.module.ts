import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFondComponentComponent } from './not-fond-component/not-fond-component.component';
import { ServicesComponent } from './services/services.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DashboardModule} from "./dashboard/dashboard.module";
import {TokenInterceptorProvider} from "./_interceptor/token.interceptor";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatStepperModule } from '@angular/material/stepper';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFondComponentComponent,
    ServicesComponent
  ],
  imports: [
    DashboardModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatStepperModule,
    
  ],
  providers: [DatePipe, TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

