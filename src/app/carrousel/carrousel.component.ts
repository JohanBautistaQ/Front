// carrousel.component.ts
import { Component, OnInit } from '@angular/core';
import { SurveyApiService } from '../survey/surveyApi.service';
import { SurveyQuestion } from '../survey/surveyQuestion';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  questions: SurveyQuestion[] = [];
  currentSlideIndex = 0;  

  constructor(private surveyApiService: SurveyApiService) { }

  ngOnInit() {
    this.surveyApiService.getAll().subscribe((data: SurveyQuestion[]) => {
      this.questions = data;
    }, (error: any) => {
      console.error('Error loading questions:', error);
    });
  }

  moveSlide(directionOrIndex: number | string): void {
    if (typeof directionOrIndex === 'number') {
      this.currentSlideIndex = directionOrIndex;
    } else if (directionOrIndex === 'next') {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.questions.length;
    } else if (directionOrIndex === 'prev') {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.questions.length) % this.questions.length;
    }
  }
}
  