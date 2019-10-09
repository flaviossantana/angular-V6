import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API = environment.API;

@Injectable({providedIn: 'root'})
export class InscreverService {

  constructor(private http: HttpClient) {
  }

  usuarioJaUtilizado(usuario: string) {
    return this.http.get(API + '/user/exists/' + usuario);
  }

}
