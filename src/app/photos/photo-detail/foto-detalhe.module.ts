import {NgModule} from "@angular/core";
import {FotoDetalheComponent} from "./foto-detalhe.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    FotoDetalheComponent
  ],
  exports: [
    FotoDetalheComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FotoDetalheModule {

}
