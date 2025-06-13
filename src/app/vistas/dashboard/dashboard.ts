import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../servicios/api/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard',
   imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],

})
export class Dashboard implements OnInit {
  authService = inject(AuthService);
  http = inject(HttpClient);
  productos: any[] = [];
  user?: any;
  apiUrl = 'http://localhost:8000/api/products';

 ngOnInit(): void {
  this.authService.getCurrentAuthUser().subscribe({
    next: (user) => {
      this.user = user;


      this.http.get<any[]>(this.apiUrl).subscribe({
        next: (data) => {
          this.productos = data;
        },
        error: (err) => {
          console.error('Error al obtener productos:', err);
        }
      });
    },
    error: (err) => {
      console.error('Error al obtener usuario:', err);
    }
  });
}


  logout(): void {
    this.authService.logout();
  }

  getImageUrl(image: string | null): string {
    return image
      ? `http://localhost:8000/storage/${image}`
      : 'https://via.placeholder.com/150?text=Sin+imagen';

  }
}
