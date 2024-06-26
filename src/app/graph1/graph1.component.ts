import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ToastrService } from 'ngx-toastr';
import { ResponseQuestion } from './responseQuestion';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html'
})
export class Graph1Component implements OnInit {
  @Input() data: any;
  public graph1: any;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getData();
  }


  consolidated!: number;
  response: Array<ResponseQuestion> = [];
  graph1Label = "Conteo";
  graph1Type: ChartType = 'bar';
  graph1Labels: Set<any> = new Set();
  graph1Data: Array<number> = []
  type: any
  backgroundColor:any
  options = {}

  getData(){
    this.http.get('http://34.27.189.110:8080/survey_consolidated_metrics/1/').subscribe({
      next: (response: any) => {
        this.consolidated = response.consolidated.id;
        this.http.get('http://34.27.189.110:8080/survey_responses/' + response.consolidated.id +'/' + this.data.id).subscribe({
          next: (response: any) => {
            this.response = response;

            if(this.data.type_question == "YES_NO"){
              this.yesNoQ(response);
            } else if (this.data.type_question == "SELECT"){
              this.selectQ(response);
            }

            
            this.createGraph();
          },
          error: (error: any) => this.toastr.error('Unable to load graph', 'Load'),
        });
      },
      error: (error: any) => this.toastr.error('Unable to get consolidated', 'Load'),
    });

  }

  yesNoQ(response: any){
    let numberYes = 0
    let numberNo = 0
    let total = 0
    this.graph1Labels.add('yes')
      this.graph1Labels.add('no')
    for(let responseSurvey of response){
      let answer = responseSurvey.answer.toLowerCase();
      if(answer.includes('yes')){ 
        numberYes+=1
      } else {
        numberNo +=1;
      }
    }
    this.graph1Data.push(numberYes);
    this.graph1Data.push(numberNo);
    total = numberYes + numberNo;
    this.type = 'bar';
    this.backgroundColor = 'rgba(54, 162, 235, 0.5)'
    this.options = {
      scales: {
        yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
      }
    }
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

    
    this.graph1Labels = this.data.question_config.options;
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
    this.graph1 = new Chart("graph1",{
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
      },
      options: this.options
      
    });
  }

  
}
