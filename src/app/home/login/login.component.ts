import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';

@Component({
  selector: 'ap-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

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
        () => console.log('Login realizado!')
        ,
        err => {
          this.isNaoAutorizado = true;
          this.loginForm.reset();
        }
  );


  }

}
