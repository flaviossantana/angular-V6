import {AbstractControl} from '@angular/forms';

export function emailValidator(control: AbstractControl) {

  // tslint:disable-next-line:max-line-length
  const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function isEmailInvalido() {
    return control.value.trim() && !email.test(control.value);
  }

  if (isEmailInvalido()) {
    return {email: true};
  }

  return null;
}
