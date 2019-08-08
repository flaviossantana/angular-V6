import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {PaginaNaoEncontradoComponent} from './erros/pagina-nao-encontrado/pagina-nao-encontrado.component';

const rotas: Routes = [
  {
    path: 'user/flavio',
    component: PhotoListComponent
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  {
    path: '**',
    component: PaginaNaoEncontradoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rotas, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
