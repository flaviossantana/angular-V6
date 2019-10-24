import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UsuarioService} from "../usuario/usuario.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class RequerAutenticacao implements CanActivate{

  constructor(
    private usuarioService: UsuarioService,
    private router: Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if(this.usuarioService.isLogado()){
      return true;
    }

    this.router.navigate(['']);

    return false;
  }

}
