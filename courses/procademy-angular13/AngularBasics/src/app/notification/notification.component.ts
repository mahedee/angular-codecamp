import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Template property of Component
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
            <p>Notification Component: Use Template property. This website uses cookies to provide better user experience</p>
            </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align:center;}", "p{font-size:14px;}"]
})
export class NotificationComponent {

}
