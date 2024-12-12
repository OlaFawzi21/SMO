import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products> {
    return this.http.get<Products>('https://dummyjson.com/products');
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(`https://dummyjson.com/products/${id }`);
  }
}
