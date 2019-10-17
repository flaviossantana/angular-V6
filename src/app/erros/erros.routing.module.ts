import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaginaNaoEncontradoComponent} from './pagina-nao-encontrado/pagina-nao-encontrado.component';


const rotas: Routes = [
  {
    path: '',
    component: PaginaNaoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(rotas)]
})
export class ErrosRoutingModule {

}
