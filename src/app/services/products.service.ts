import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor( private http: HttpClient ) { }

  getProductsUrl() {
    return this.http.get<Product>(this.productsUrl);
  }
}
