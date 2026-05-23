import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [SecondComponent],
  //templateUrl: './third.component.html',
  template:
  `
  <h2> This is Another Component Loaded from Root Component  </h2>

  <h2> This code was written in side ts file  </h2>

  `,
  //styleUrl: './third.component.css'
  styles:
  [

    `
      h2{
      color:green
      }
    `

  ]
})
export class ThirdComponent {

}
