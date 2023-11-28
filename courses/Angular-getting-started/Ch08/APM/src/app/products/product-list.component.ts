import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from './product.service';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit
{
    pageTitel : string = 'Product List!';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    //listFilter : string = 'cart';

    _listFilter: string;

    get listFilter() : string{
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products : IProduct[] = [];

    constructor(private _productService : ProductService){
     
      //this.listFilter = 'cart';
    }
    onRatingClicked(message : string) : void{
      this.pageTitel = 'Product List: ' + message;
    }
    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product : IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);     
    }

    toogleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.products = this._productService.getProducts();
      this.filteredProducts = this.products;
      //console.log("In onInit");
    }
}