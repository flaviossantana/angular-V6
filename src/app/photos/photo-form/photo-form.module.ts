import {NgModule} from '@angular/core';
import {PhotoFormComponent} from './photo-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VmensagemModule} from "../../shared/components/vmensagem/vmensagem.module";
import {CardModule} from "../../shared/components/card/card.module";
import {PhotoModule} from "../photo/photo.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmensagemModule,
    PhotoModule
  ],
  declarations: [
    PhotoFormComponent
  ]
})
export class PhotoFormModule {

}
