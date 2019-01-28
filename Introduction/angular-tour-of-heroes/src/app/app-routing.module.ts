import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//const routes: Routes = [];
const routes: Routes = [
  //Default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  {path:'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [
    //The method is called forRoot() because you configure the router at the application's root level. 
    //The forRoot() method supplies the service providers and directives needed for routing, 
    //and performs the initial navigation based on the current browser URL.

    //CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule { }
