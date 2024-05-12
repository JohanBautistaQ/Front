import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  onSubmit(): void {
    this.http.post('http://34.135.101.126:8080/companies/login', this.loginForm.value).subscribe({
      next: (response: any) => console.log('Login successful', response),
      error: (error: any) => console.log('Error', error)
    });
    console.log(this.loginForm.value)
  }
  
  ngOnInit() {
  }

}
