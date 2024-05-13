import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './login/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SurveyComponent } from './survey/survey.component';
import { Graph1Component } from './graph1/graph1.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'survey',
    component: SurveyComponent, canActivate: [AuthGuard]
  },
  { path: 'fundation',component: AdminComponent, canActivate: [AuthGuard]}, 
  {
    path: 'graph1',component: Graph1Component, canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
