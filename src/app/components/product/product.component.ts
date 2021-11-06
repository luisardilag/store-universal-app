import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
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

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.product);
  }

}
