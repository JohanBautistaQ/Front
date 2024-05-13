import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ToastrService } from 'ngx-toastr';
import { ResponseQuestion } from './responseQuestion';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html'
})
export class Graph2Component implements OnInit {
  @Input() data: any;
  public graph2: any;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit(): void {
    console.log(this.data)
    this.getData();
  }


  consolidated!: number;
  response: Array<ResponseQuestion> = [];
  graph2Label = "Conteo";
  graph2Type: ChartType = 'bar';
  graph2Labels: Set<any> = new Set();
  graph2Data: Array<number> = []
  type: any
  backgroundColor:any

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
    this.graph2Labels.add('yes')
      this.graph2Labels.add('no')
    for(let responseSurvey of response){
      let answer = responseSurvey.answer.toLowerCase();
      if(answer.includes('yes')){ 
        numberYes+=1
      } else {
        numberNo +=1;
      }
    }
    this.graph2Data.push(numberYes);
    this.graph2Data.push(numberNo);
    total = numberYes + numberNo;
    this.type = 'bar';
    this.backgroundColor = 'rgba(54, 162, 235, 0.5)'
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

    
    this.graph2Labels = this.data.question_config.options;
    this.graph2Data = Object.values(conteo);
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
    this.graph2 = new Chart("graph1",{
      type: this.type,

      data: {
        labels: Array.from(this.graph2Labels.values()),

        datasets: [
          {
            label:"Conteo",
            data: this.graph2Data,
            backgroundColor: this.backgroundColor,
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
        }
      }
    });
  }

  
}
