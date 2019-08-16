import {Component, OnDestroy, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

import {Photo} from '../photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  crescente = true;
  fotos: Photo[] = [];
  filtro: string = '';
  propriedade = 'description';
  debounce: Subject<string> = new Subject<string>();

  constructor(private rotaAtiva: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fotos = this.rotaAtiva.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(500))
      .subscribe(filtro =>  this.filtro = filtro);
  }

  onKeyUpFiltro(filtro) {
   this.debounce.next(filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
