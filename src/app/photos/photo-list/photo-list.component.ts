import {Component, OnDestroy, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

import {Photo} from '../photo';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  filtro = '';
  temMais = true;
  usuario = '';
  crescente = true;
  paginaCorrente = 1;
  fotos: Photo[] = [];
  propriedade = 'description';
  debounce: Subject<string> = new Subject<string>();

  constructor(
    private rotaAtiva: ActivatedRoute,
    private fotoService: PhotoService) {
  }

  ngOnInit(): void {
    this.usuario = this.rotaAtiva.snapshot.params.usuario;
    this.fotos = this.rotaAtiva.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(500))
      .subscribe(filtro => this.filtro = filtro);
  }

  carregarMais() {
    this.fotoService.listaPorUsuarioPaginado(this.usuario, ++this.paginaCorrente).subscribe(fotos => {
      this.fotos = this.fotos.concat(fotos);
      if (!fotos.length) {
        this.temMais = false;
      }
    });
  }

  onKeyUpFiltro(filtro) {
    this.debounce.next(filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
