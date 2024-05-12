import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  onSubmit(): void {
    this.http.post('http://localhost:8080/companies/login', this.loginForm.value).subscribe({
      next: (response: any) => this.toastr.success('Login successful!', 'Status'),
      error: (error: any) => this.toastr.error('Invalid user', 'Status'),
    });
  }
  
  ngOnInit() {
  }

}
