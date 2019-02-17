import { Component } from '@angular/core';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'

})

export class ProductListComponent
{
    pageTitel : string = 'Product List!';
    products : any[] = [
        {
            "productId" : 2,
            "productName" : "Garden Cart",
            "productCode" : "Code123",
            "releaseDate" : "March, 18, 2016",
            "description" : "This is a description for product 2",
            "starRating" : "4.2",
            "imageURL" : ""

        },
        {
            "productId" : 3,
            "productName" : "Garden Cart",
            "productCode" : "Code1234",
            "releaseDate" : "March, 18, 2017",
            "description" : "This is a description for product 3",
            "starRating" : "4.2",
            "imageURL" : ""
        }
    ];
}