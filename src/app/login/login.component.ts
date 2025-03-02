import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  token: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService  
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    const loginData = {
      username: this.username,
      password: this.password,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    this.http.post('http://182.93.95.238:8085/auth/login', loginData, { headers }).subscribe(
      (response: any) => {
        if (response.status === 1) {
          const userData = {
            name: response.data.name,
            agencyid: response.data.agencyid,
          };
          const token = response.data.token;

          // Storing token and user data
          this.authService.login(userData, token);

          this.toastr.success('Login successful!', 'Success'); //toaster
          this.router.navigate(['/default']); 
        } else {
          this.toastr.error('Invalid username or password.', 'Login Failed'); 
        }
      },
      (error) => {
        console.error('Login request failed:', error);
        this.toastr.error('Login request failed. Please try again.', 'Error'); 
      }
    );
  }
}
