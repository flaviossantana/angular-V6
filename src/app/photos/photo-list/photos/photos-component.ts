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
      this.criandoNovasLinhas(this.fotos);
    }
  }

  criandoNovasLinhas(fotos: Photo[]) {
    const novasLinhas = [];
    for (let index = 0; index < fotos.length; index += 3) {
      this.novasLinhas.push(fotos.slice(index, index + 3));
    }
    return novasLinhas;
  }

}
