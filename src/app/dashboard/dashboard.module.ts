import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ConsolidatedDataComponent } from './consolidated-data/consolidated-data.component';
import { DashboardService } from './dashboard.service';
import { AdminModule } from '../admin/admin.module';
import { Graph1Module } from '../graph1/graph1.module';



@NgModule({
  declarations: [
    DashboardComponent, 
    ConsolidatedDataComponent
  ],
  imports: [
    CommonModule, AdminModule, Graph1Module
  ],
  providers: [
    
  ],
  exports: []
})
export class DashboardModule { }
