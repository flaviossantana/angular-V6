import {Pipe, PipeTransform} from '@angular/core';
import {Photo} from './photo';

@Pipe({name: 'filtroPorDescricao'})
export class FiltroPorDescricaoPipe implements PipeTransform {

  transform(fotos: Photo[], filtro: string): Photo[] {

    filtro = filtro.trim().toLocaleLowerCase();

    if (filtro) {
      return fotos
        .filter(
          foto =>
            foto.description
              .toLocaleLowerCase()
              .includes(filtro)
        );
    }

    return fotos;
  }
}
