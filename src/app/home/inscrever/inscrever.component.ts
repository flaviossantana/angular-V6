import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {minusculoValidador} from '../../core/validators/minusculo.validator';
import {emailValidator} from '../../core/validators/email.validator';
import {UsuarioJaUtilizadoValidatorService} from './usuario-ja-utilizado.validator.service';

@Component({
  templateUrl: 'inscrever.component.html'
})
export class InscreverComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private usuarioJaUtilizadoValidator: UsuarioJaUtilizadoValidatorService
  ) {
  }

  inscreverForm: FormGroup;

  ngOnInit(): void {
    this.inscreverForm = this.fb.group({
      email: ['',
        [
          Validators.required,
          emailValidator
        ]
      ],
      nomeCompleto: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      ],
      usuario: ['',
        [
          Validators.required,
          minusculoValidador,
          Validators.minLength(2),
          Validators.maxLength(10)
        ],
        this.usuarioJaUtilizadoValidator.verifiqueSeUsuarioJaUtilizado()
      ],
      senha: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ]
    })
    ;
  }

}
