import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Usuario} from "../usuario/usuario";
import {UsuarioService} from "../usuario/usuario.service";

@Component({
  selector: 'ap-rodape',
  templateUrl: './rodape.component.html'
})
export class RodapeComponent implements OnInit{

  constructor(private usuarioService: UsuarioService){

  }

  usuario = new Observable<Usuario>();

  ngOnInit(): void {
    this.usuario = this.usuarioService.getusuario();
  }

}
