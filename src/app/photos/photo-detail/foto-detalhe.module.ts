import {NgModule} from "@angular/core";
import {FotoDetalheComponent} from "./foto-detalhe.component";
import {CommonModule} from "@angular/common";
import {PhotoModule} from "../photo/photo.module";

@NgModule({
  declarations: [
    FotoDetalheComponent
  ],
  exports: [
    FotoDetalheComponent
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class FotoDetalheModule {

}
