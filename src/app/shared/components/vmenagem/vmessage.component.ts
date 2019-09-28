import {Component, Input} from '@angular/core';

@Component({
  selector: 'ap-mensagem',
  templateUrl: './vmessage.component.html'
})
export class VmessageComponent {

  @Input() isErro: boolean;
  @Input() mensagem: string;

}
