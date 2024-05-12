import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

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

  constructor(private http: HttpClient,private authService: AuthService) { }

  onSubmit(): void {
    this.authService.login(this.loginForm);
  }

  // Método público para acceder al estado de autenticación
  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  
  ngOnInit() {
    this.authService.logout();
  }

}
