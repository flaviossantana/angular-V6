import {Component} from '@angular/core';
import {UsuarioService} from '../usuario/usuario.service';
import {Usuario} from '../usuario/usuario';
import {Observable} from 'rxjs';


@Component({
  selector: 'ap-cabecallho',
  templateUrl: './cabecalho.component.html'
})
export class CabecalhoComponent {

  constructor(usuarioService: UsuarioService) {
    usuarioService.getusuario()
      .subscribe(
        usuario => this.usuario = usuario
      );
  }

  usuario: Usuario;

}
