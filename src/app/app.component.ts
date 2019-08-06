import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhotoService} from './photos/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura PIC!';
  fotos: Object[] = [];

  constructor(photoService: PhotoService) {
    photoService.listaPorUsuario('flavio')
      .subscribe(fotos => this.fotos = fotos);
  }

}
