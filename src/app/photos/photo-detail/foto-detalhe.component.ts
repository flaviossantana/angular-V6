import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {PhotoService} from "../photo.service";
import {Photo} from "../photo";

@Component({
  templateUrl: 'foto-detalhe.component.html',
  styleUrls: ['foto.component.scss']
})
export class FotoDetalheComponent implements OnInit{

  constructor(
    private fotoService: PhotoService,
    private route: ActivatedRoute){
  }

  foto: Photo;

  ngOnInit(): void {
    let fotoid = this.route.snapshot.params.fotoId;
    this.fotoService
      .buscarPorId(fotoid)
      .subscribe(
        (foto) => {
          this.foto = foto
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
