import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Photo} from './photo';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Comentario} from "./Comentario";

const API = environment.API;

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  listaPorUsuario(nome: string): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(API + '/' + nome + '/photos');
  }

  listaPorUsuarioPaginado(usuario: string, pagina: number) {
    const params = new HttpParams().append('page', pagina.toString());
    return this.http
      .get<Photo[]>(API + '/' + usuario + '/photos', {params});
  }

  enviar(description: string, allowComments: boolean, arquivo: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', this.isPermiteComentario(allowComments));
    formData.append('imageFile', arquivo);
    return this.http.post(API + '/photos/upload', formData);
  }

  private isPermiteComentario(allowComments: boolean) {
    return allowComments ? 'true' : 'false';
  }

  buscarPorId(fotoId: number) {
    return this.http.get<Photo>(API + '/photos/' + fotoId);
  }

  buscarComentarios(fotoId: number) {
    return this.http.get<Comentario[]>(API + '/photos/' + fotoId + '/comments');
  }

  adicionarComentario(fotoId: number, comentario: string) {
    return this.http.post(API + '/photos/' + fotoId + '/comments', {commentText : comentario});
  }

  remover(fotoId: number){
    return this.http.delete(API + '/photos/' + fotoId);
  }

}
