import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Photo} from '../photo';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  filtro = '';
  usuario = '';
  temMais = true;
  crescente = true;
  paginaCorrente = 1;
  fotos: Photo[] = [];
  propriedade = 'description';

  constructor(
    private rotaAtiva: ActivatedRoute,
    private fotoService: PhotoService) {
  }

  ngOnInit(): void {
    this.usuario = this.rotaAtiva.snapshot.params.usuario;
    this.fotos = this.rotaAtiva.snapshot.data['photos'];
  }

  carregarMais() {
    this.fotoService.listaPorUsuarioPaginado(this.usuario, ++this.paginaCorrente).subscribe(fotos => {
      this.fotos = this.fotos.concat(fotos);
      this.temMais = fotos.length > 0;
      this.filtro = '';
    });
  }

  recebeFiltro(filtro: string) {
    this.filtro = filtro;
  }
}
