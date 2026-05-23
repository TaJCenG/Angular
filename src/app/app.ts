import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './base-component/base-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BaseComponent],
  template: `
    <app-base-component></app-base-component>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('second-project');
}
