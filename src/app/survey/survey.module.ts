import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SurveyComponent],
  exports: [SurveyComponent]
})
export class SurveyModule { }
