import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photo-list.component';
import {PhotosComponent} from './photos/photos-component';
import {BotaoCarregarComponent} from './botao-carregar/botao-carregar.component';
import {OrdenarPorPipe} from '../../pipe/ordenar-por.pipe';
import {CommonModule} from '@angular/common';
import {FiltroPorDescricaoPipe} from '../filtro-por-descricao.pipe';
import {PhotoModule} from '../photo/photo.module';
import {CardModule} from '../../shared/components/card/card.module';
import {PhotosModule} from './photos/photos.module';

@NgModule({
  declarations: [
    OrdenarPorPipe,
    PhotoListComponent,
    FiltroPorDescricaoPipe,
    BotaoCarregarComponent
  ],
  imports: [
    PhotoModule,
    PhotosModule,
    CommonModule,
    CardModule
  ]
})
export class PhotoListModule {

}
