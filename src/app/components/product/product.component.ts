import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    product: Product = {
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

  constructor() { }

  ngOnInit(): void {
  }

}
