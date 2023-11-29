import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="alert alert-success" [hidden]="displayNotification">
  <p>Notification component using template property</p>
</div>`
})
export class NotificationComponent {

  displayNotification: boolean = false;
}
