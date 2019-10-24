import {NgModule} from '@angular/core';
import {PhotoFormComponent} from './photo-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VmensagemModule} from "../../shared/components/vmensagem/vmensagem.module";
import {PhotoModule} from "../photo/photo.module";
import {CliqueImediatoModule} from "../../shared/directive/clique-imediato/clique-imediato.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmensagemModule,
    PhotoModule,
    CliqueImediatoModule
  ],
  declarations: [
    PhotoFormComponent
  ]
})
export class PhotoFormModule {

}
