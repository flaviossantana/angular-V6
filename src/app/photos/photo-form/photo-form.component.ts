import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhotoService} from "../photo.service";
import {Photo} from "../photo";

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private fotoService: PhotoService
  ) {
  }

  foto: File;
  fotoForm: FormGroup;

  ngOnInit() {
    this.fotoForm = this.fb.group({
      file: [
        '',
        Validators.required
      ],
      description: [
        '',
        Validators.maxLength(300)
      ],
      allowComments: [
        true
      ]
    })
  }

  aoMudarFoto(event) {
    if (this.isFotoSelecionada(event)) {
      let leitorArquivo = new FileReader();
      let arquivo = event.target.files[0];

      leitorArquivo.readAsDataURL(arquivo);
      leitorArquivo.onload = () => {
        leitorArquivo.result;
      }
    }
  }

  private isFotoSelecionada(event) {
    return event.target.files && event.target.files.length > 0;
  }

  enviarFoto() {

    const descricao = this.fotoForm.get('description').value;
    const permiteComentario = this.fotoForm.get('allowComments').value;

    this.fotoService
      .enviar(
        descricao,
        permiteComentario,
        this.foto)
      .subscribe(
        (retorno) => {
          console.log(retorno);
        },
        (erro) => {
          console.log(erro);
        });

  }

}
