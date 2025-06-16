import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/products';

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
      console.log('Petición a /api/products');
  }
}
