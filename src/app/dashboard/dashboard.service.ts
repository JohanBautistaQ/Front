import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsolidatedMetrics } from './consolidated-data/consolidated_data';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = "http://34.27.189.110:8080/survey_consolidated_metrics/";

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getConsolidatedMetrics(id: number): Observable<ConsolidatedMetrics> {
    return this.http.get<ConsolidatedMetrics>(this.apiUrl + id + "/");
  }
}
