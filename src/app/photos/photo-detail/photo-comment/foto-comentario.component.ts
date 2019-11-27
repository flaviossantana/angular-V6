import {Component, Input, OnInit} from "@angular/core";
import {PhotoService} from "../../photo.service";
import {Comentario} from "../../Comentario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ap-foto-comentario',
  templateUrl: 'foto-comentario.component.html'
})
export class FotoComentarioComponent implements OnInit {

  constructor(
    private fotoService: PhotoService,
    private fb: FormBuilder) {
  }

  @Input() fotoId: number;
  comentarios: Comentario[];
  comentarioForm: FormGroup;


  ngOnInit(): void {
    this.definirComentarioForm();
    this.buscarComentarios();
  }

  private definirComentarioForm() {
    this.comentarioForm = this.fb.group({
      comment: [
        '',
        Validators.maxLength(300)
      ]
    });
  }

  private buscarComentarios() {
    this.fotoService
      .buscarComentarios(this.fotoId)
      .subscribe(
        (comentarios) => {
          this.comentarios = comentarios;
        }
      );
  }
}
