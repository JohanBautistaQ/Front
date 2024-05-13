import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graph1Component } from './graph1/graph1.component';
import { ChartsModule } from 'ng2-charts';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [						
    AppComponent,
      SurveyComponent,
      LoginComponent,
      CarrouselComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
