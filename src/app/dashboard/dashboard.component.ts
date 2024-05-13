import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { ResponseQuestion } from '../graph1/responseQuestion';
import { HttpClient } from '@angular/common/http';
import {Chart} from 'chart.js';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private http: HttpClient,private toastr: ToastrService, private router: Router) {}
  public data = {
    "id": 40,
    "statement": "¿Cómo es el ambiente de trabajo en tu empresa?",
    "asociated_risk": "Amenaza e intimidaciones",
    "type_question": "SELECT",
    "question_config": {
        "options": [
            "Excelente",
            "Bueno",
            "Hostil",
            "Discriminatorio"
        ],
        "multiple": true,
        "options_score": {
            "Bueno": 0.7,
            "Hostil": 0.1,
            "Excelente": 1,
            "Discriminatorio": 0
        }
    }
  }


  //Cargar grafica abajo
  consolidated!: number;
  response: Array<ResponseQuestion> = [];
  graph1Label = "Conteo";
  graph1Labels: Set<any> = new Set();
  graph1Data: Array<number> = []
  type: any
  backgroundColor:any
  graph2!: Chart;
  pregunta: String =this.data.statement;

  getData(){
    this.http.get('http://34.27.189.110:8080/survey_consolidated_metrics/1/').subscribe({
      next: (response: any) => {
        this.consolidated = response.consolidated.id;
        this.http.get('http://34.27.189.110:8080/survey_responses/' + response.consolidated.id +'/' + this.data.id).subscribe({
          next: (response: any) => {
            this.response = response;

            this.selectQ(response);
            this.createGraph();
            console.log(response)
          },
          error: (error: any) => this.toastr.error('Unable to load graph', 'Load'),
        });
      },
      error: (error: any) => this.toastr.error('Unable to get consolidated', 'Load'),
    });

  }

  selectQ(response: any){
    let conteo:any = {}
    for(let option of this.data.question_config.options){
      option = option.toLowerCase();
      conteo[option] = 0;
    }
    for(let responseSurvey of response){
      let answer = responseSurvey.answer.toLowerCase();
      conteo[answer] +=1;
    }

    
    this.graph1Labels = new Set(this.data.question_config.options);
    this.graph1Data = Object.values(conteo);
    this.type = 'doughnut';
    this.backgroundColor = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(122, 205, 86)',
    'rgb(145, 100, 86)',
    'rgb(3, 50, 86)'
    ]

  }

  createGraph(){
    this.graph2 = new Chart("graph2",{
      type: this.type,

      data: {
        labels: Array.from(this.graph1Labels.values()),

        datasets: [
          {
            label:"Conteo",
            data: this.graph1Data,
            backgroundColor: this.backgroundColor,
          }
        ]
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  logout() {
    this.authService.logout();
  }

  navigateToFoundation() {
    this.router.navigate(['/fundation']);
  }
}
