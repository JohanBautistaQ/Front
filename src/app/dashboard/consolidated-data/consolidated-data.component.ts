import { Component, OnInit } from '@angular/core';
import { ConsolidatedMetrics } from './consolidated_data';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consolidated-data',
  templateUrl: './consolidated-data.component.html',
  styleUrls: ['./consolidated-data.component.css'],
})
export class ConsolidatedDataComponent implements OnInit {
  consolidatedSurveyMetrics!: ConsolidatedMetrics;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idValue = localStorage.getItem('id');
    const id = parseInt(idValue || '0');  // Usa '0' como valor predeterminado
    this.dashboardService.getConsolidatedMetrics(id).subscribe((data) => {
      data.consolidated.score = Number(data.consolidated.score.toFixed(2));
      data.highest_score = Number(data.highest_score.toFixed(2));
      data.lowest_score = Number(data.lowest_score.toFixed(2));
      this.consolidatedSurveyMetrics = data;
    });
  }
}
