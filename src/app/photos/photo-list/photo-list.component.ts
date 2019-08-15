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
  propriedade = 'description';
  crescente = true;

  constructor(private rotaAtiva: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fotos = this.rotaAtiva.snapshot.data['photos'];
  }

  onKeyUpFiltro($event) {
    this.filtro = $event.target.value;
  }

}
