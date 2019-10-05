import {AbstractControl} from '@angular/forms';

export function minusculoValidador(control: AbstractControl) {

  if (isValorInvalido()) {
    return {minusculo: true};
  }

  function isValorInvalido() {
    const valorMinusculo = /^[a-z0-9_\-]+$/;
    return control.value.trim && !valorMinusculo.test(control.value);
  }

  return null;
}
