import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ap-botao-carregar',
  templateUrl: './botao-carregar.component.html',
  styleUrls: ['./botao-carregar.component.css']
})
export class BotaoCarregarComponent implements OnInit {

  @Input() temMais = false;

  constructor() {
  }

  ngOnInit() {
  }

}
