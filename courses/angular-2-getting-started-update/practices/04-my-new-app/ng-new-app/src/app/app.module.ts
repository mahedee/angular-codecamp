//Root module 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
// import { ProductListComponent } from './products/product-list.component';
// import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
// import { StarComponent } from './shared/star.component';
// import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
//import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent, // register the component here
    // ConvertToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
    WelcomeComponent
  ],

  //External or thirdparties component
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path: "products", component: ProductListComponent},
      // {path: "products/:id",
      //   canActivate: [ProductDetailGuard], 
      //   component: ProductDetailComponent
      // },
      {path: "welcome", component: WelcomeComponent},
      {path: "", redirectTo: "welcome", pathMatch: "full"},
      {path: "**", redirectTo: "welcome", pathMatch: "full"}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Root module
export class AppModule { }
