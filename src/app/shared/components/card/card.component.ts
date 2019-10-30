import {Component, Input} from '@angular/core';

@Component({
  selector: 'ap-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent {

  @Input() titulo = '';
  corDestaque = '#f0eded';

}
