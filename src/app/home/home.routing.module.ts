import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../core/auth/auth-.guard';
import {LoginComponent} from './login/login.component';
import {InscreverComponent} from './inscrever/inscrever.component';

const rotas: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'inscrever',
        component: InscreverComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(rotas)
  ]
})
export class HomeRoutingModule {

}
