import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostBinding]',
})
export class HostBindingDirective {

  @HostBinding('style.color') color: string = 'blue';
}
