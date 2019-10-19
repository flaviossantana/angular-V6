import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {minusculoValidador} from '../../core/validators/minusculo.validator';
import {emailValidator} from '../../core/validators/email.validator';
import {UsuarioJaUtilizadoValidatorService} from './usuario-ja-utilizado.validator.service';
import {NovoUsuario} from './NovoUsuario';
import {InscreverService} from './inscrever.service';
import {Router} from '@angular/router';
import {DetectorPlataformaService} from '../../core/detector-plataforma/detector-plataforma.service';

@Component({
  templateUrl: 'inscrever.component.html'
})
export class InscreverComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioJaUtilizadoValidator: UsuarioJaUtilizadoValidatorService,
    private inscreverService: InscreverService,
    private plataformaService: DetectorPlataformaService) {
  }


  inscreverForm: FormGroup;
  @ViewChild('emailInput') emailRef: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.construirFomulario();
    this.emailFocus();
  }

  private construirFomulario() {
    this.inscreverForm = this.fb.group({
      email: ['',
        [
          Validators.required,
          emailValidator
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          minusculoValidador,
          Validators.minLength(2),
          Validators.maxLength(10)
        ],
        this.usuarioJaUtilizadoValidator.verifiqueSeUsuarioJaUtilizado()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ]
    });
  }

  cadastrar() {
    const novoUsuario = this.inscreverForm.getRawValue() as NovoUsuario;

    this.inscreverService
      .cadastrar(novoUsuario)
      .subscribe(() =>
          this.router.navigate(['']),
        () => console.log('ERRO!')
      );
  }

  private emailFocus() {
    if (this.plataformaService.isPlatformBrowser()) {
      this.emailRef.nativeElement.focus();
    }
  }

}
