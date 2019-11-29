import {NgModule} from "@angular/core";
import {FotoDetalheComponent} from "./foto-detalhe.component";
import {CommonModule} from "@angular/common";
import {PhotoModule} from "../photo/photo.module";
import {FotoComentarioComponent} from "./photo-comment/foto-comentario.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {VmensagemModule} from "../../shared/components/vmensagem/vmensagem.module";
import {MostraSomenteProprietarioModule} from "../../shared/directive/mostra-somente-proprietario/mostra-somente-proprietario.module";

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
    PhotoModule,
    ReactiveFormsModule,
    VmensagemModule,
    MostraSomenteProprietarioModule
  ]
})
export class FotoDetalheModule {

}
