import { Injectable } from '@angular/core';
import { SurveyQuestion } from './surveyQuestion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://34.27.189.110:8080/survey_questions/';

@Injectable({
  providedIn: 'root'
})  
export class SurveyApiService {
constructor(private http: HttpClient ) { }
  getAll(): Observable<SurveyQuestion[]> {
    return this.http.get<SurveyQuestion[]>(baseUrl);
  }

  sendResponses(responses: any): Observable<any> {
    const url = 'http://34.27.189.110:8080/survey_responses/'; // URL para enviar las respuestas
    return this.http.post<any>(url, responses);
    
  }

create(questionData: any): Observable<any> {
  return this.http.post(baseUrl, questionData);
}
}
