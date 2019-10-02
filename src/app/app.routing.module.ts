import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {PaginaNaoEncontradoComponent} from './erros/pagina-nao-encontrado/pagina-nao-encontrado.component';
import {PhotoListResolver} from './photos/photo-list/photo-list.resolver';
import {LoginComponent} from './home/login/login.component';
import {AuthGuard} from './core/auth/auth-.guard';

const rotas: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:usuario',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
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
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
