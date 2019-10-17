import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const rotas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'user',
    loadChildren: './photos/photos.module#PhotosModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '**',
    loadChildren: './erros/erros.module#ErrosModule'
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
