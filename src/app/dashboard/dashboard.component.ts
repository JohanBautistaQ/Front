import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ConsolidatedMetrics } from './consolidated-data/consolidated_data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  consolidatedSurveyMetrics!: ConsolidatedMetrics;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dashboardService.getConsolidatedMetrics(id).subscribe((data) => {
      this.consolidatedSurveyMetrics = data;
    });
  }
}
