import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-register',
  templateUrl: './register-register.html',
  styleUrls: ['./register-register.css'],
  imports: [FormsModule,CommonModule],
})
export class RegisterRegister {
  name = '';
  email = '';
  password = '';
  password_confirmation = '';

  http = inject(HttpClient);
router = inject(Router);

  register(event: Event) {
    event.preventDefault();

    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
      role: 'user',
    };

    this.http.post('http://localhost:8000/api/register', data).subscribe({
      next: (res) => {
        alert('Registro exitoso');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error en registro', err);
        alert('Error al registrar. Revisa los datos.');
      },
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
