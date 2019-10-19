import {NgModule} from '@angular/core';
import {PhotoFormComponent} from './photo-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VmensagemModule} from "../../shared/components/vmensagem/vmensagem.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmensagemModule
  ],
  declarations: [
    PhotoFormComponent
  ]
})
export class PhotoFormModule {

}
