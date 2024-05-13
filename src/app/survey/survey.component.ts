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

  constructor(private surveyService: SurveyApiService ) {  }

  getQuestions():void {
    this.surveyService.getAll().subscribe((questions) =>{
      this.questions = questions;
      this.getTotalScoreForQuestion(questions);
      console.log(questions)
      console.log(this.totalScore)
    });
  }

  getTotalScoreForQuestion(questionsDict:any): void {
    let totalScore = 0;
    for(const question in questionsDict){
      // if (question.type_question === 'NUMERIC') {
      //   const scoresSchema = question.question_config.scores_schema;
      //   for (const key in scoresSchema) {
      //     if (scoresSchema.hasOwnProperty(key)) {
      //       console.log(scoresSchema[key])
      //       totalScore += scoresSchema[key];
      //     }
      //   }
      
      // } else if (questionsDict.type_question === 'YES_NO') {
      //   totalScore = questionsDict.question_config.yes_score + questionsDict.question_config.no_score;
      // }

    }
    
    console.log(totalScore)
    this.totalScore = totalScore;
  }
  

  updateQuestionResponse(questionId: number, selectedAnswer: any): void {
    const formDataAsObject = {  // Crear un objeto con los datos del formData
      respondent: '3da84f5b-b6dc-45cc-8e53-4e6c89ad4a11',
      survey_consolidated: '1',
      survey_question: questionId,
      comment: 'sapo',
      answer: selectedAnswer,
    };
    console.log(formDataAsObject);  

    this.questionResponses.push(formDataAsObject); 
    console.log('Arreglo de respuestas:', this.questionResponses); 
    


  }

  onSubmit(): void {
    console.log(this.questionResponses)

    console.log('Formulario enviado:', this.questionResponses);
    // Llama al método en el servicio para enviar las respuestas
    this.surveyService.sendResponses(this.questionResponses).subscribe(
      response => {
        console.log('Respuestas enviadas con éxito:', response);
        // Agrega aquí cualquier acción adicional después de enviar las respuestas

        for (const item of response) {
          this.surveyScore += item.score; // Sumar el score de cada objeto al total
        }
        this.isGoodScore = this.surveyScore > (this.totalScore / 2);

      },
      error => {
        console.error('Error al enviar las respuestas:', error);
        // Agrega aquí manejo de errores si es necesario
      }
    );
  }

    
  ngOnInit() {
    this.getQuestions();  
   
  }
}
