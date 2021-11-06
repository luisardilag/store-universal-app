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
  showProductDetail = false;

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe( data => {
        
        this.products = data;
        
      });
  }

  onShowDetail( id: string ) {
    console.log(id);
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

}
