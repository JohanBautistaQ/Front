import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  
  imports: [
    CommonModule,
    ReactiveFormsModule  
  ],
  declarations: [AdminComponent], 
  exports: [AdminComponent]
  
})
export class AdminModule { }