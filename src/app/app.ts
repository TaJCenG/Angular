import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountlistComponent } from './accountlist/accountlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AccountlistComponent],
  template: '<app-accountlist></app-accountlist>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bankproject');
}
