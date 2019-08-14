import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  fotos: Photo[] = [];
  filtro: string = '';

  constructor(
    private photoService: PhotoService,
    private rotaAtiva: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const nome = this.rotaAtiva.snapshot.params.usuario;
    this.photoService.listaPorUsuario(nome)
      .subscribe(fotos => {
        this.fotos = fotos;
      });
  }

  onKeyUpFiltro($event) {
    this.filtro = $event.target.value;
  }

}
