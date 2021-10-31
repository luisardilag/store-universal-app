import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: '',
      type: ''
    },
    images: []
  };

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductsUrl()
      .subscribe( data => {
        
        this.products = data;
        console.log(this.products);
        
      });
  }

}
