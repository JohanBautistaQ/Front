import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrouselComponent } from './carrousel.component';
const routes: Routes = [
  {
    path: '',
    component: CarrouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Graph1RoutingModule { }

