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
  formData = new FormGroup({
    respondent: new FormControl(''),
    survey_consolidated: new FormControl(''),
    survey_question: new FormControl(''),
    comment: new FormControl(''),
    score: new FormControl(''),
    answer: new FormControl(''),


  });

  constructor(private surveyService: SurveyApiService ) {  }

  getQuestions():void {
    this.surveyService.getAll().subscribe((questions) =>{
      this.questions = questions;
    });
  }

  onSubmit(): void {
    // Aquí puedes agregar la lógica para enviar las respuestas al servidor
    this.formData.value.respondent = "3da84f5b-b6dc-45cc-8e53-4e6c89ad4a11";
    this.formData.value.survey_consolidated = "1";
    this.formData.value.survey_question = "1";
    this.formData.value.comment = "sapo";
    this.formData.value.answer = 20;
    

    console.log('Formulario enviado:', this.formData.value);
    // Llama al método en el servicio para enviar las respuestas
    this.surveyService.sendResponses(this.formData.value).subscribe(
      response => {
        console.log('Respuestas enviadas con éxito:', response);
        // Agrega aquí cualquier acción adicional después de enviar las respuestas
      },
      error => {
        console.error('Error al enviar las respuestas:', error);
        // Agrega aquí manejo de errores si es necesario
      }
    );
  }

    
  ngOnInit() {
    console.log("sapo")
    console.log(this.questions)
    this.getQuestions();  
   
  }
}
