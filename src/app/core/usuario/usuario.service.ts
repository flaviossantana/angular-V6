import {Injectable} from '@angular/core';
import {TokenService} from '../token/token.service';
import {BehaviorSubject} from 'rxjs';
import * as JWT from 'jwt-decode';

import {Usuario} from './usuario';
import {NovoUsuario} from "../../home/inscrever/NovoUsuario";

@Injectable({providedIn: 'root'})
export class UsuarioService {

  constructor(private tokenService: TokenService) {
    if (this.tokenService.getToken()) {
      this.decodificaENotifica();
    }
  }

  private usuarioSubject = new BehaviorSubject<Usuario>(null);
  private nomeUsuario: string;

  setChave(chave: string) {
    this.tokenService.setToken(chave);
    this.decodificaENotifica();
  }

  getusuario() {
    return this.usuarioSubject.asObservable();
  }

  sair() {
    this.tokenService.removerToken();
    this.usuarioSubject.next(null);
  }

  private decodificaENotifica() {
    const chave = this.tokenService.getToken();
    const usuario = JWT(chave) as Usuario;
    this.nomeUsuario = usuario.name;
    this.usuarioSubject.next(usuario);
  }

  isLogado() {
    return this.tokenService.temToken();
  }

  getNomeUsuario(): string {
    return this.nomeUsuario;
  }

}
