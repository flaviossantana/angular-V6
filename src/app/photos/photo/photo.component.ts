import {Component, Input} from '@angular/core';

const NUVEM = 'http://localhost:3000/imgs/';

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {

  private _local = '';

  @Input() descricao = '';
  @Input() dataPostagem = '';

  @Input() set local(local: string) {
    this._local = this.definirLocal(local);
  }

  get local() {
    return this._local;
  }

  definirLocal(local: string): string{
    return this.isBase64(local) ? local : NUVEM + local;
  }

  private isBase64(local: string) {
    return local.startsWith('data');
  }
}
