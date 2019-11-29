import {Directive, ElementRef, Input, OnInit, Renderer} from "@angular/core";
import {UsuarioService} from "../../../core/usuario/usuario.service";
import {Photo} from "../../../photos/photo";

@Directive({
  selector : '[mostarQuandoProprietario]'
})
export class MostraSomenteProprietarioDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private usuarioService: UsuarioService
  ){}

  @Input() foto: Photo;

  ngOnInit(): void {
    this.buscarUsuarioLogado();
  }

  private buscarUsuarioLogado() {
    this.usuarioService.getusuario().subscribe(usuario => {
      if(this.isUsuarioProprietario(usuario)){
        this.element.nativeElement.style.display = 'none';
      }
    });
  }

  private isUsuarioProprietario(usuario) {
    return !usuario || usuario.id != this.foto.userId;
  }
}
