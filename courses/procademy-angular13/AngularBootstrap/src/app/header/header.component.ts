import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slogan: string = "Mahedee.net : Think Simple";
  source: string = "/assets/shopping.jpeg";

  getSlogan(){
    return "Mahedee.net : Think Simple";
  }

}
