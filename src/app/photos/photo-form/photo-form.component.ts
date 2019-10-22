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

  arquivo: File;
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

  enviarFoto() {

    const allowComments = this.fotoForm.get('allowComments').value;
    const description = this.fotoForm.get('description').value;

    const postagem = {
      allowComments,
      description
    } as Photo;

    this.fotoService.adicionar(postagem).subscribe(
      (retorno) => {
        console.log(retorno);
      },
      (erro) => {
        console.log(erro);
      });

  }

}
