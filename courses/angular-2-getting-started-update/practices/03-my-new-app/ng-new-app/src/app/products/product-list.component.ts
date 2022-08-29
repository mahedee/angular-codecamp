import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product"
import { ProductService } from "./product.service";

@Component({
  selector: "app-products",
  templateUrl: './product-list.component.html',

  // You can add more stylesheet using commas
  styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = "";

  // Will assign sub object later
  sub!: Subscription;

  //listFilter: string = 'cart';

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("In setter: ", value);

    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  //products: any[] = [
  // products: IProduct[] = [
  //   {
  //     "productId": 2,
  //     "productName": "Garden Cart",
  //     "productCode": "GDN-0023",
  //     "releaseDate": "March 18, 2021",
  //     "description": "15 gallon capacity rolling garden cart",
  //     "price": 32.99,
  //     "starRating": 4.2,
  //     "imageUrl": "assets/images/garden_cart.png"
  //   },
  //   {
  //     "productId": 5,
  //     "productName": "Hammer",
  //     "productCode": "TBX-0048",
  //     "releaseDate": "May 21, 2021",
  //     "description": "Curved claw steel hammer",
  //     "price": 8.9,
  //     "starRating": 4.8,
  //     "imageUrl": "assets/images/hammer.png"
  //   }
  // ];

  constructor(private productService: ProductService) {

  }


  // Lifecycle hook
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
    this.sub.unsubscribe();
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    // Arrow function
    // If use multiple statement use second bracket
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // Lifecycle hook
  ngOnInit(): void {
    console.log("Lifecycle hook: In OnInit");
    //this.products = this.productService.getProducts();
    this.sub = this.productService.getProducts().subscribe({

      // Multi line method
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err

    });
    //this.filteredProducts = this.products;
    console.log(this.products);
    //this.listFilter = 'cart';

  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }
}