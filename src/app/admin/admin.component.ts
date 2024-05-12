
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SurveyApiService } from '../survey/surveyApi.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  [x: string]: any;


  // questionForm!: FormGroup;
  questionForm = new FormGroup({
    statement: new FormControl(''),
    asociated_risk: new FormControl(''),
    type_question: new FormControl(''),
    question_config: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private surveyApiService: SurveyApiService) { }

  ngOnInit() {
    // this.questionForm = this.fb.group({
    //   statement: ['', Validators.required],
    //   asociated_risk: [''],
    //   type_question: ['', Validators.required],
    //   question_config: ['', Validators.required]
    // });
    
  }

  submitQuestion() {
    if (this.questionForm.valid) {
      const formValue = this.questionForm.value;


      if (typeof formValue.question_config === 'string') {
        try {
          formValue.question_config = JSON.parse(formValue.question_config);
        } catch (e) {
          console.error('Error parsing question_config:', e);
          return;
        }
      }

      console.log('Form data to be sent:', formValue);

      this.surveyApiService.create(formValue).subscribe(
        data => {
          console.log('Success:', data);
        },
        error => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Form is not valid');
    }
  }



}
