import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UsuarioService} from '../usuario/usuario.service';

@Injectable({'providedIn': 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.usuarioService.isLogado()) {
      this.router.navigate(['user', this.usuarioService.getNomeUsuario()]);
      return false;
    }
    return true;
  }

}
