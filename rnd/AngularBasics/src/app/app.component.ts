import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';

/* The `@Component` decorator is used to define a new component in Angular. It is a TypeScript
decorator that provides metadata about the component, such as its selector, template, styles, and
other configuration options. */
@Component({
  selector: 'app-root',
  standalone: true,
  /* Import ContainerComponent to available in this component */
  imports: [CommonModule, RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBasics';
}
