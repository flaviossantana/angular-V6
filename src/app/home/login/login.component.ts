import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {DetectorPlataformaService} from '../../core/detector-plataforma/detector-plataforma.service';

@Component({
  selector: 'ap-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformaService: DetectorPlataformaService) {
  }

  @ViewChild('usuarioInput') usuarioRef: ElementRef<HTMLInputElement>;

  isNaoAutorizado = false;
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', [
        Validators.required,
        Validators.minLength(4)
      ]
      ]
    });
  }

  entrar() {
    const usuario = this.loginForm.get('usuario').value;
    const senha = this.loginForm.get('senha').value;

    this.authService.autenticar(usuario, senha)
      .subscribe(
        () => {
          this.router.navigate(['user', usuario]);
        },
        () => {
          this.isNaoAutorizado = true;
          this.loginForm.reset();
          if (this.plataformaService.isPlatformBrowser()) {
            this.usuarioRef.nativeElement.focus();
          }
        }
      );
  }
}
