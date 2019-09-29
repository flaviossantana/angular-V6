import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {UsuarioService} from '../usuario/usuario.service';


const API_URL = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private  http: HttpClient,
    private usurioService: UsuarioService) {
  }

  autenticar(usuario: string, senha: string) {
    return this.http
      .post(
        `${API_URL}/user/login`,
        {userName: usuario, password: senha},
        {observe: 'response'}) /*OPÇÃO PARA TER ACESSO AO HEADERS DA RESPOSTA*/
      .pipe(
        tap(res => {
          const chaveAutenticacao = res.headers.get('x-access-token');
          this.usurioService.setChave(chaveAutenticacao);
          console.log(`Usuário ${usuario} autenticado com a chave ${chaveAutenticacao}`);
        })
      );
  }

}
