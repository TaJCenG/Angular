import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//META DATA
@Component({
  selector: 'app-root1',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AshokIT Angular Team';
}
