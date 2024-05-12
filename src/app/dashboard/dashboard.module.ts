import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ConsolidatedDataComponent } from './consolidated-data/consolidated-data.component';
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [
    DashboardComponent, 
    ConsolidatedDataComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    
  ],
})
export class DashboardModule { }
