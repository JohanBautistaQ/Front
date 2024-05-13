import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { Graph1Component } from './graph1.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [Graph1Component],
  exports: [Graph1Component]
})
export class Graph1Module { }




