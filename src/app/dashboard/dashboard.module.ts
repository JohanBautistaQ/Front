import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ConsolidatedDataComponent } from './consolidated-data/consolidated-data.component';
import { DashboardService } from './dashboard.service';
import { AdminModule } from '../admin/admin.module';
import { Graph1Module } from '../graph1/graph1.module';
import { CarrouselModule } from '../carrousel/carrousel.module';
import { Graph2Component } from '../graph2/graph2.component';
import { Graph2Module } from '../graph2/graph2.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent, 
    ConsolidatedDataComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  providers: [
    
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
