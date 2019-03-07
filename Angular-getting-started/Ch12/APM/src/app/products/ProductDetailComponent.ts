import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
@Component({
  //selector: 'app-product-detail.component',
  templateUrl: './product-detail.component.component.html',
  styleUrls: ['./product-detail.component.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product details";
  product: IProduct;
  constructor() { }
  ngOnInit() {
  }
}
