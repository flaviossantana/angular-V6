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
import {PhotoListModule} from './photo-list/photo-list.module';
import {PhotoFormModule} from './photo-form/photo-form.module';

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    CommonModule,
    PhotoListModule,
    PhotoFormModule,
    HttpClientModule
  ],
  providers: [

  ]
})
export class PhotosModule {
}
