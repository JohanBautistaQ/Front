import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Graph1Component } from './graph1.component';
const routes: Routes = [
  {
    path: '',
    component: Graph1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Graph1RoutingModule { }

