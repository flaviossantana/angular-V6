import {Component, Input, OnInit} from "@angular/core";
import {PhotoService} from "../../photo.service";
import {Comentario} from "../../Comentario";

@Component({
  selector: 'ap-foto-comentario',
  templateUrl: 'foto-comentario.component.html'
})
export class FotoComentarioComponent implements OnInit {

  constructor(
    private fotoService: PhotoService) {

  }

  @Input() fotoId: number;
  comentarios: Comentario[];

  ngOnInit(): void {

    this.fotoService
      .buscarComentarios(this.fotoId)
      .subscribe(
        (comentarios) => {
          this.comentarios = comentarios;
        }
      );

  }

}
