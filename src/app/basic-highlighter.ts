import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlighter]',
  standalone: true
})
export class BasicHighlighter implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "yellow";
  }
}
