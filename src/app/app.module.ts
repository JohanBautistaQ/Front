import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { SurveyApiService } from './survey/surveyApi.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { Graph1Component } from './graph1/graph1.component';
import { ChartsModule } from 'ng2-charts';
import { CarrouselComponent } from './carrousel/carrousel.component';

@NgModule({
  declarations: [						
    AppComponent,
      SurveyComponent,
      LoginComponent,
      DashboardComponent,
      AdminComponent,
      Graph1Component,
      CarrouselComponent
   ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [SurveyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
