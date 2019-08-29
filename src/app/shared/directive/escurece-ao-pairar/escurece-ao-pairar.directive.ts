import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[apEscureceAoPairar]'
})
export class EscureceAoPairarDirective {

  constructor(private element: ElementRef) {
  }

  @Input() corDestaque: string;

  corPadrao = '#f1eeee';

  @HostListener('mouseleave')
  onMouseLeave() {
    this.destaqueAoPairar(null);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.destaqueAoPairar(this.corDestaque || this.corPadrao);
  }

  private destaqueAoPairar(cor) {
    this.element.nativeElement.style.backgroundColor = cor;
  }

}
