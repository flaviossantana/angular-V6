import {NgModule} from "@angular/core";
import {FotoDetalheComponent} from "./foto-detalhe.component";
import {CommonModule} from "@angular/common";
import {PhotoModule} from "../photo/photo.module";
import {FotoComentarioComponent} from "./photo-comment/foto-comentario.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    FotoDetalheComponent,
    FotoComentarioComponent
  ],
  exports: [
    FotoDetalheComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    PhotoModule
  ]
})
export class FotoDetalheModule {

}
