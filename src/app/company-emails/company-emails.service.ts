import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyEmail } from './company-email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyEmailsService {
  private apiUrl = 'http://34.27.189.110:8080/companies/';
  constructor(private http: HttpClient) {}

  getCompanyEmails(): Observable<CompanyEmail[]> {
    const company_pk = localStorage.getItem('id');
    return this.http.get<CompanyEmail[]>(
      this.apiUrl + company_pk + '/employee_emails/'
    );
  }

  saveNewEmails(emails: CompanyEmail[]): Observable<CompanyEmail[]> {
    const company_pk = localStorage.getItem('id');
    return this.http.post<CompanyEmail[]>(
      this.apiUrl + company_pk + '/employee_emails/',
      {
        emails,
      }
    );
  }

  sendEmails(): any {
    const company_pk = localStorage.getItem('id');
    return this.http.post<any>(
      this.apiUrl + company_pk + '/send_emails/',{});
  }
}
