import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { Empdetails } from './empdetails/empdetails';
import { Pipes } from './pipes/pipes';
import { AgePipe } from './age-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Empdetails],
  template: `
    <h1>Welcome to Angular</h1>
    <appHighlight></appHighlight>
  `
})
export class App {
}
