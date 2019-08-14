import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ordenarPor'})
export class OrdenarPorPipe implements PipeTransform {

  transform(lista: any[], ordenarPor: string, asc: boolean = true): any[] {

    ordenarPor = ordenarPor.trim();

    if (!ordenarPor) {
      return lista;
    }

    if (asc) {
      return Array.from(lista).sort((itemA: any, itemB: any) => {
        return this.ordenarPorComparacao(itemA[ordenarPor], itemB[ordenarPor]);
      });
    }

    return Array.from(lista).sort((itemA: any, itemB: any) => {
      return this.ordenarPorComparacao(itemB[ordenarPor], itemA[ordenarPor]);
    });

  }

  ordenarPorComparacao(a: any, b: any): number {

    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {

      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
    } else {

      if (parseFloat(a) < parseFloat(b)) {
        return -1;
      }
      if (parseFloat(a) > parseFloat(b)) {
        return 1;
      }
    }

    return 0;
  }

}
