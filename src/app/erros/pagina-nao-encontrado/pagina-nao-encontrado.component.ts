import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {extractStyleUrls} from '@angular/compiler/src/style_url_resolver';


@Component({
  selector: 'ap-pagina-nao-encontrado',
  templateUrl: './pagina-nao-encontrado.component.html',
  styleUrls: ['./pagina-nao-encontrado.component.scss']
})
export class PaginaNaoEncontradoComponent implements OnInit {

  @ViewChild('boxGhostEyes') boxGhostEyes: ElementRef;

  pageX: any = window.innerWidth;
  pageY: any = window.innerHeight;
  mouseY: any = 0;
  mouseX: any = 0;
  yAxis: any = 50;
  xAxis: any = 50;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event) {

    console.log(event);
    this.mouseY = event.clientY;
    this.yAxis = (this.pageY / 2 - this.mouseY) / this.pageY * 300;

    this.mouseX = event.clientX / -this.pageX;
    this.xAxis = this.mouseX * 100 - 100;

    console.log(this.boxGhostEyes.nativeElement.className);

  }

}
