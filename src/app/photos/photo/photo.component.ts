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

  @Input() set local(local: string){
    if(!local.startsWith('data')){
      this._local = NUVEM + local;
    } else {
      this._local = local;
    }
  }

  get local(){
    return this._local;
}

}
