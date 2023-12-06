import { Injectable } from '@angular/core';
import { Product } from './Models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class ProductListService {
  
  private products: Product[] = [
    { id: 1, name: 'Oppo 1', brand: 'oppo', category: 'phone', price: 50 },
    { id: 2, name: 'Vivo 1', brand: 'vivo', category: 'phone', price: 75 },
    { id: 3, name: 'Oppo 2', brand: 'oppo', category: 'phone', price: 50 },
    { id: 4, name: 'Vivo 2', brand: 'vivo', category: 'phone', price: 75 },
    { id: 1, name: 'oneplus 1', brand: 'oneplus', category: 'tv', price: 50 },
    { id: 2, name: 'oneplus 2', brand: 'oneplus', category: 'tv', price: 75 },
    { id: 3, name: 'samsung 1', brand: 'samsung', category: 'tv', price: 50 },
    { id: 4, name: 'samsung 2', brand: 'samsung', category: 'tv', price: 75 },
    // Add more products
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  constructor() { }
}
