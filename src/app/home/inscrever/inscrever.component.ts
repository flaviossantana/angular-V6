import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {minusculoValidador} from '../../core/validators/minusculo.validator';
import {emailValidator} from '../../core/validators/email.validator';

@Component({
  templateUrl: 'inscrever.component.html'
})
export class InscreverComponent implements OnInit {

  constructor(
    private fb: FormBuilder
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
        ]
      ],
      senha: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ]
    });
  }

}
