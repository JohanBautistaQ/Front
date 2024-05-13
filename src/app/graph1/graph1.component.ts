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
export class Graph1Component implements OnInit{
  @Input() data: any;
  public barChartOptions: ChartOptions = {
    responsive: true
  };

  

  constructor(private http: HttpClient, private toastr: ToastrService){}
  public graph1: any


  consolidated!: number;
  numberYes: number = 0
  numberNo: number = 0
  total: number = 0
  percYes!: number
  percNo!: number

  response: Array<ResponseQuestion> = [];
  graph1Label = "Conteo";
  graph1Type: ChartType = 'bar';
  graph1Labels: Array<any> = ['yes', 'no']
  graph1Data: Array<number> = []

  getData(){
    this.http.get('http://34.27.189.110:8080/survey_consolidated_metrics/1/').subscribe({
      next: (response: any) => {
        this.consolidated = response.consolidated.id;
        this.http.get('http://34.27.189.110:8080/survey_responses/' + response.consolidated.id +'/27').subscribe({
          next: (response: any) => {
            this.response = response;
            for(let responseSurvey of response){
              let answer = responseSurvey.answer.toLowerCase();
              if(answer.includes('yes')){ 
                this.numberYes+=1
              } else {
                this.numberNo +=1;
              }
            }
            this.graph1Data.push(this.numberYes);
            this.graph1Data.push(this.numberNo);
            this.total = this.numberYes + this.numberNo;
            this.percYes = this.numberYes/this.total;
            this.percNo = this.numberNo/this.total;

            this.createGraph();
          },
          error: (error: any) => this.toastr.error('Unable to load graph', 'Load'),
        });
      },
      error: (error: any) => this.toastr.error('Unable to get consolidated', 'Load'),
    });

  }

  createGraph(){
    this.graph1 = new Chart("graph1",{
      type: 'bar',

      data: {
        labels: this.graph1Labels,

        datasets: [
          {
            label:"Conteo",
            data: this.graph1Data,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
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

  ngOnInit(): void {
    this.getData();
  }
}
