import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './carrousel.component';
import { Graph1Module } from '../graph1/graph1.module'; 
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    Graph1Module 
  ],
  exports: [CarrouselComponent],
  declarations: [CarrouselComponent]
})
export class CarrouselModule { }
