import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {PhotoService} from "../photo.service";
import {Photo} from "../photo";
import {Comentario} from "../Comentario";

@Component({
  templateUrl: 'foto-detalhe.component.html',
  styleUrls: ['foto.component.scss']
})
export class FotoDetalheComponent implements OnInit {

  constructor(
    private fotoService: PhotoService,
    private route: ActivatedRoute) {
  }

  foto: Photo;
  comentarios: Comentario[];

  ngOnInit(): void {
    let fotoid = this.route.snapshot.params.fotoId;
    this.buscarFoto(fotoid);
    this.buscarComentario(fotoid);
  }

  private buscarComentario(fotoid) {
    this.fotoService
      .buscarComentarios(fotoid)
      .subscribe(
        (comentarios) => {
          this.comentarios = comentarios;
        }
      );
  }

  private buscarFoto(fotoid) {
    this.fotoService
      .buscarPorId(fotoid)
      .subscribe((foto) => {
        this.foto = foto
      });
  }
}
