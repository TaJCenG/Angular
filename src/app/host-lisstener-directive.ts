import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostLisstenerDirective]',
})
export class HostLisstenerDirective {
  //@HostBinding('style.color') color: string = 'blue';
  @Input() defaultColor: string = 'blue';
  @Input() highlightColor: string = 'red';

  @HostBinding('style.color') backgroundColor: string = 'transparent';
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}
  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
