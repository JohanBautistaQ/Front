import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
<<<<<<< HEAD
    
=======
    this.authService.logout();
>>>>>>> 608fcde0d70c654ff455a6c0fea76dcfd915aa24
  }
}
