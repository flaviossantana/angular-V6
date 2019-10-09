import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {debounceTime, first, map, switchMap} from 'rxjs/operators';
import {InscreverService} from './inscrever.service';

@Injectable({providedIn: 'root'})
export class UsuarioJaUtilizadoValidatorService {

  constructor(private inscreverService: InscreverService) {
  }

  verifiqueSeUsuarioJaUtilizado() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(1000))
        .pipe(switchMap(usuario => {
          return this.inscreverService.usuarioJaUtilizado(usuario);
        }))
        .pipe(map(jaUtilizado =>
          jaUtilizado ? {usaurioutilizado: true} : null))
        .pipe(first());
    };
  }

}
