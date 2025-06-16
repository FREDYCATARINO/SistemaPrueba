import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../servicios/api/auth.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './dashboard.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  authService = inject(AuthService);
  productService = inject(ProductService);
  router = inject (Router)
  productos: any[] = [];
  user?: any;

  ngOnInit(): void {
    this.authService.getCurrentAuthUser().subscribe({
      next: (user) => {
        this.user = user;
        this.cargarProductos();


      },
      error: (err) => {
        console.error('Error al obtener usuario:', err);
      }
    });
  }

cargarProductos(): void {
  this.productService.getProducts().subscribe({
    next: (data) => {
      this.productos = data.map(producto => ({
        ...producto,
        imageUrl: this.getImageUrl(producto.image),
      }));
    },
    error: (err) => {
      console.error('Error al obtener productos:', err);
    }
  });
}


  logout(): void {
    this.authService.logout();
  }

  getImageUrl(image: string | null): string {
    return image
      ? `http://localhost:8000/storage/${image}`
      : 'https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg';
  }
    goToCreate(): void {
    this.router.navigate(['/create']);
  }
}
