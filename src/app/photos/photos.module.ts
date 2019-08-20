import {NgModule} from '@angular/core';
import {PhotoComponent} from './photo/photo.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {PhotoFormComponent} from './photo-form/photo-form.component';
import {PhotosComponent} from './photo-list/photos/photos-component';
import {FormsModule} from '@angular/forms';
import {FiltroPorDescricaoPipe} from './filtro-por-descricao.pipe';
import {AppModule} from '../app.module';
import {OrdenarPorPipe} from '../pipe/ordenar-por.pipe';
import { BotaoCarregarComponent } from './photo-list/botao-carregar/botao-carregar.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FiltroPorDescricaoPipe,
    OrdenarPorPipe,
    BotaoCarregarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ]
})
export class PhotosModule {
}
