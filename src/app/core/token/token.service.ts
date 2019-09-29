import {Injectable} from '@angular/core';

const KEY = 'authToken';

@Injectable({providedIn: 'root'})
export class TokenService {

  temToken() {
    return !!this.getToken();
  }

  setToken(chave: string) {
    window.localStorage.setItem(KEY, chave);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removerToken() {
    window.localStorage.removeItem(KEY);
  }

}
