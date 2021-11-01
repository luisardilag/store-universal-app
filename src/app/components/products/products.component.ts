import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe( data => {
        
        this.products = data;
        
      });
  }

}
