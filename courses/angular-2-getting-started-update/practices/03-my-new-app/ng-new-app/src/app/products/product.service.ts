import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root' // Root injector: Available anyware in the application
})

export class ProductService{

    // this URL is configure in angular.json
    private productUrl = "api/products/products.json";

    constructor(private http: HttpClient){

    }

    getProducts(): Observable<IProduct[]>{

        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log("All", JSON.stringify(data))),
            catchError(this.handleError)
        );

        /*
        return[

            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2021",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "assets/images/garden_cart.png"
              },
              {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2021",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "assets/images/hammer.png"
              }
        ]

        */
    }

    private handleError(err: HttpErrorResponse){

        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console

        let errorMessage = "";
        if (err.error instanceof ErrorEvent){

            // A client-side or network error occured. Handle it accordingly
            errorMessage = `An error occured: ${err.error.message}`;
        }else{

            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }

    // getProducts(): IProduct[]{
    //     return[

    //         {
    //             "productId": 2,
    //             "productName": "Garden Cart",
    //             "productCode": "GDN-0023",
    //             "releaseDate": "March 18, 2021",
    //             "description": "15 gallon capacity rolling garden cart",
    //             "price": 32.99,
    //             "starRating": 4.2,
    //             "imageUrl": "assets/images/garden_cart.png"
    //           },
    //           {
    //             "productId": 5,
    //             "productName": "Hammer",
    //             "productCode": "TBX-0048",
    //             "releaseDate": "May 21, 2021",
    //             "description": "Curved claw steel hammer",
    //             "price": 8.9,
    //             "starRating": 4.8,
    //             "imageUrl": "assets/images/hammer.png"
    //           }
    //     ]
    // }

}