import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html'
})
export class Graph1Component {
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
  public barChartType: ChartType = 'bar';
  public barChartData: SingleDataSet = [
    [50, 25, 75, 30, 60]
  ];
}
