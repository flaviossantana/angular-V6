import {Component, OnInit} from '@angular/core';
import {PhotoService} from './photos/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Alura PIC!';
  fotos: Object[] = [];
  metadados: any;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.listaPorUsuario('flavio')
      .subscribe(fotos => this.fotos = fotos);
  }
}
