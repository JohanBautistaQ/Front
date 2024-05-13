import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from './surveyQuestion';
import { SurveyApiService } from './surveyApi.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  questions: Array<SurveyQuestion> = [];
  questionResponses: Array<any> = [];
  totalScore = 0; 
  isGoodScore = false; 
  surveyScore = 0;
  respondent = "";
  survey_consolidated = null;

  constructor(private surveyService: SurveyApiService ) {  }
  
  ngOnInit() {
    this.getQuestions();  
    this.allRespondents();
  }


  getQuestions():void {
    this.surveyService.getAll().subscribe((questions) =>{
      this.questions = questions;
      this.getTotalScoreForQuestion(questions);
    });
  }

  allRespondents():void{
    this.surveyService.getRespondent().subscribe((respondentsId) =>{
      this.respondent = respondentsId["employee_id"];
      this.survey_consolidated = respondentsId["company_id"];
    });
  }

  
  getTotalScoreForQuestion(questionsDict:any): void {
    let totalScore = 0;
    for (let question of questionsDict){
      if (question.type_question === 'NUMERIC') {
        const scoresSchema = question.question_config.scores_schema;
        for (const key in scoresSchema) {
          if (scoresSchema.hasOwnProperty(key)) {
            totalScore += scoresSchema[key];
          }
        }
      } else if (question.type_question === 'YES_NO') {
        totalScore += question.question_config.yes_score + question.question_config.no_score;
      }
    }
    console.log(totalScore);
    this.totalScore = totalScore;
  }
  
  updateQuestionResponse(questionId: number, selectedAnswer: any): void {
    const formDataAsObject = {  // Crear un objeto con los datos del formData
      respondent: this.respondent ,
      survey_consolidated: "3",
      survey_question: questionId,
      comment: '|',
      answer: selectedAnswer,
    };
    console.log(formDataAsObject);  
    this.questionResponses.push(formDataAsObject); 
    console.log('Arreglo de respuestas:', this.questionResponses); 
  
  }

  onSubmit(): void {
    console.log(this.questionResponses);
    console.log('Formulario enviado:', this.questionResponses);
    this.surveyService.sendResponses(this.questionResponses).subscribe(
      response => {
        console.log('Respuestas enviadas con éxito:', response);
        for (const item of response) {
          this.surveyScore += item.score; 
        }
        this.isGoodScore = this.surveyScore > (this.totalScore / 2);
      },
      error => {
        console.error('Error al enviar las respuestas:', error);
      }
    );
 }
}
