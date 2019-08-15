import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Photo} from '../../photo';

@Component({
  selector: 'ap-photos',
  templateUrl: 'photos-component.html'
})
export class PhotosComponent implements OnInit, OnChanges {

  @Input() fotos: Photo[] = [];
  novasLinhas: any[] = [];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fotos) {
      this.novasLinhas = this.criandoNovasLinhas(this.fotos);
    }
  }

  criandoNovasLinhas(fotos: Photo[]) {
    const linhas = [];
    for (let index = 0; index < fotos.length; index += 3) {
      linhas.push(fotos.slice(index, index + 3));
    }
    return linhas;
  }

}
