import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginaNaoEncontradoComponent} from './pagina-nao-encontrado/pagina-nao-encontrado.component';
import {ErrosRoutingModule} from './erros.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ErrosRoutingModule
  ],
  declarations: [PaginaNaoEncontradoComponent]
})
export class ErrosModule { }
