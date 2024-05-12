import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from './surveyQuestion';
import { SurveyApiService } from './surveyApi.service';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  questions: Array<SurveyQuestion> = [];

  constructor(private surveyService: SurveyApiService) {  }

  getQuestions():void {
    this.surveyService.getAll().subscribe((questions) =>{
      this.questions = questions;
    });
  }
    
  ngOnInit() {
    console.log("sapo")
    console.log(this.questions)
    this.getQuestions();  
  }
}
