import { Component } from '@angular/core';
import { BasicHighlighter } from '../basic-highlighter';
import { CommonModule } from '@angular/common';
import { SafeRender } from '../safe-render';
import { HostBindingDirective } from '../host-binding';
import { HostLisstenerDirective } from '../host-lisstener-directive';
import { CardTypeDirective } from '../card-type';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from '../country/country';

@Component({
  selector: 'app-base-component',
  imports: [CommonModule, FormsModule, CountryComponent],
  template: '<app-country></app-country>',
  styleUrl: './base-component.css',
  standalone: true
})
export class BaseComponent {
}
