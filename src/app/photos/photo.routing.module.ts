import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {PhotoListResolver} from './photo-list/photo-list.resolver';
import {PhotoFormComponent} from './photo-form/photo-form.component';
import {RequerAutenticacao} from "../core/auth/requer-autenticacao.guard";
import {FotoDetalheComponent} from "./photo-detail/foto-detalhe.component";

const rotas: Routes = [
  {
    path: ':usuario',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [RequerAutenticacao]
  },
  {
    path: 'p/:fotoId',
    component: FotoDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(rotas)]
})
export class PhotoRoutingModule {

}
