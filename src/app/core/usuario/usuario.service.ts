import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {Subject} from 'rxjs';
import * as JWT from 'jwt-decode';

import {Usuario} from './usuario';

@Injectable({providedIn: 'root'})
export class UsuarioService {

  constructor(private tokenService: TokenService) {
    if (this.tokenService.getToken()) {
      this.tokenService.getToken();
    }
  }

  private usuarioSubject = new Subject<Usuario>();

  setToken(chave: string) {
    this.tokenService.setToken(chave);
    this.decodificaENotifica();
  }

  getusuario() {
    return this.usuarioSubject.asObservable();
  }

  private decodificaENotifica() {
    const chave = this.tokenService.getToken();
    const usuario = JWT(chave) as Usuario;
    this.usuarioSubject.next(usuario);
  }

}
