// Root application component
// Run at the time of application load
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <!-- <div><h1>{{pageTitle}}</h1>
  <app-products></app-products>
  </div> -->
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li><a class="nav-link" routerLink="/welcome">Home</a></li>
      <li><a class="nav-link" routerLink="/products">Product List</a></li>
    </ul>
  </nav>
  <div class = "container">
  <!-- when the router activate the associated component will be view here -->
    <router-outlet></router-outlet> 
  </div>
  `
})

// Root application component
// Run at the time of application load
export class AppComponent {
  pageTitle: string = "Acme product management";
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ng-new-app';
// }
