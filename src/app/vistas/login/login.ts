import { AuthService } from './../../servicios/api/auth.service';
import { CommonModule } from '@angular/common';
import { routes } from './../../app.routes';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email = '';
  password = '';
  AuthService = inject(AuthService);
  router=inject(Router)
  login(event: Event) {
    event.preventDefault();
    console.log(`Login : ${this.email} / ${this.password}`);
    this.AuthService.login({
      email: this.email,
      password: this.password,
    }).subscribe(() => {
      this.router.navigate(['/']);
     })
  }
   goToRegister() {
    this.router.navigate(['/register']);
  }
}
