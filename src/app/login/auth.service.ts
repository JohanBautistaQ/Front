import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

login(credentials: FormGroup) {
  return this.http.post('http://34.27.189.110:8080/companies/login', credentials.value).subscribe({
    next: (response: any) => {
      this.toastr.success('Login successful!', 'Status');
      localStorage.setItem('isLoggedIn', 'true');  // Almacenar un indicador de sesión
      this.router.navigate(['/dashboard']);  // Navegar al Dashboard
      
    },
    error: (error: any) => this.toastr.error('Invalid user', 'Status'),
  });
}

logout() {
  localStorage.removeItem('isLoggedIn');  // Limpiar el indicador al cerrar sesión
  this.router.navigate(['/admin']);  // Navegar al Dashboard
  // Manejar la lógica de logout
}

isLoggedIn(): boolean {
  return localStorage.getItem('isLoggedIn') === 'true';
}

}
