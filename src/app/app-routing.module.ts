import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './login/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SurveyComponent } from './survey/survey.component';
import { Graph1Component } from './graph1/graph1.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CompanyEmailsComponent } from './company-emails/company-emails.component';
import { Graph2Component } from './graph2/graph2.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent, canActivate: [AuthGuard],
  },
  {
    path : 'send_emails',
    component: CompanyEmailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'survey',
    component: SurveyComponent, canActivate: [AuthGuard]
  },
  { path: 'fundation',component: AdminComponent, canActivate: [AuthGuard]}, 
  {
    path: 'graph1',component: Graph1Component, canActivate: [AuthGuard]
  },
  {
    path: 'carro',component: CarrouselComponent, canActivate: [AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
