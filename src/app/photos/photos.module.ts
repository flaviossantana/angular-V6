import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PhotoListModule} from './photo-list/photo-list.module';
import {PhotoFormModule} from './photo-form/photo-form.module';
import {PhotoRoutingModule} from './photo.routing.module';
import {PhotoModule} from './photo/photo.module';
import {FotoDetalheModule} from "./photo-detail/foto-detalhe.module";

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    CommonModule,
    PhotoListModule,
    PhotoFormModule,
    PhotoModule,
    PhotoRoutingModule,
    FotoDetalheModule
  ],
  providers: [

  ]
})
export class PhotosModule {
}
