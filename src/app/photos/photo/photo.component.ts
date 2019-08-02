import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {

  @Input() local = '';
  @Input() descricao = '';
  @Input() opacidade = '';


}
