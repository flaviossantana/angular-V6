import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../usuario/usuario.service';
import {Usuario} from '../usuario/usuario';
import {Router} from '@angular/router';


@Component({
  selector: 'ap-cabecallho',
  templateUrl: './cabecalho.component.html'
})
export class CabecalhoComponent implements OnInit{

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {
  }

  usuario: Usuario;

  ngOnInit(): void {
    this.getUsuario()
  }

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
