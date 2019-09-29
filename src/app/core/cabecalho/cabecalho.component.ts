import {Component} from '@angular/core';
import {UsuarioService} from '../usuario/usuario.service';
import {Usuario} from '../usuario/usuario';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'ap-cabecallho',
  templateUrl: './cabecalho.component.html'
})
export class CabecalhoComponent {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.getUsuario();
  }

  usuario: Usuario;

  private getUsuario(): void {
    this.usuarioService
      .getusuario()
      .subscribe(
        usuario => this.usuario = usuario
      );
  }

  private sair(): void {
    this.usuarioService.sair();
    this.router.navigate(['']);
  }
}
