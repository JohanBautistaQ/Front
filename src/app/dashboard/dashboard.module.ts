import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ConsolidatedDataComponent } from './consolidated-data/consolidated-data.component';
import { DashboardService } from './dashboard.service';
import { AdminModule } from '../admin/admin.module';


@NgModule({
  declarations: [
    DashboardComponent, 
    ConsolidatedDataComponent
  ],
  imports: [
    CommonModule, AdminModule
  ],
  providers: [
    
  ],
})
export class DashboardModule { }
