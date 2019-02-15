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
            "productCode" : "Code123"
        },
        {
            "productId" : 2,
            "productName" : "Garden Cart",
            "productCode" : "Code1234"
        }
    ];
}