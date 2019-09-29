import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../usuario/usuario.service';
import {Usuario} from '../usuario/usuario';


@Component({
  selector: 'ap-cabecallho',
  templateUrl: './cabecalho.component.html'
})
export class CabecalhoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {
    this.recuperarDadosUsuario();
  }

  usuario: Usuario;

  ngOnInit(): void {

  }

  private recuperarDadosUsuario() {
    this.usuarioService.getusuario().subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    });
  }

}
