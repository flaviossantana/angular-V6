import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[cliqueImediato]'
})
export class CliqueImediatoDirective implements OnInit{

  constructor(
    private element: ElementRef<any>
  ){}

  ngOnInit(): void {
    this.element.nativeElement.click();
  }

}
