import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from './photo';
import {Observable} from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  listaPorUsuario(nome: string): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(API + '/' + nome + '/photos');
  }
}
