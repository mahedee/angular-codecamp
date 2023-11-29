import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="alert alert-success" [hidden]="displayNotification">
  <p>Notification component using template property</p>
  <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
</div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align:center;}", "p{font-size: 14px}", ".close{float: right; margin-top: -15px;}"]
})
export class NotificationComponent {

  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }
}
