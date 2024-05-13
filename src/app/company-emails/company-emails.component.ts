import { Component, OnInit } from '@angular/core';
import { CompanyEmail } from './company-email';
import { CompanyEmailsService } from './company-emails.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-company-emails',
  templateUrl: './company-emails.component.html',
  styleUrls: ['./company-emails.component.css'],
})
export class CompanyEmailsComponent implements OnInit {
  companyEmails!: CompanyEmail[];
  addedEmails: CompanyEmail[] = [];

  newEmailData = new FormGroup({
    email: new FormControl(''),
    area: new FormControl(''),
  });

  constructor(private companyEmailsService: CompanyEmailsService) {}

  ngOnInit(): void {
    this.companyEmailsService.getCompanyEmails().subscribe((data) => {
      this.companyEmails = data;
    });
  }

  onAddEmail(): void {
    const company = parseInt(localStorage.getItem('id') || '0');
    const last_email_sent = new Date();
    this.addedEmails.push(
      new CompanyEmail(
        this.newEmailData.value.email,
        company,
        this.newEmailData.value.area,
        last_email_sent
      )
    );
    console.log(this.addedEmails);
  }

  sendEmails(): void {
    this.companyEmailsService.saveNewEmails(this.addedEmails).subscribe(
      (data) => {
        console.log(data);
        this.companyEmails = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.companyEmailsService.sendEmails().subscribe();
  }
}
