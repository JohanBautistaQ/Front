import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyEmailsComponent } from './company-emails.component';

@NgModule({
  declarations: [CompanyEmailsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [],
})
export class CompanyEmailsModule {}
