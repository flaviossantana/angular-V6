import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  fotos: Photo[] = [];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.listaPorUsuario('flavio')
      .subscribe(fotos => this.fotos = fotos);
  }

}
