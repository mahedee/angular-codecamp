import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, NotificationComponent, NavComponent, HeaderComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
