import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Photo} from '../photo';
import {PhotoService} from '../photo.service';

@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Photo[]> {

  constructor(private fotoService: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    return this.fotoService.listaPorUsuarioPaginado(route.params.usuario, 1);
  }

}
