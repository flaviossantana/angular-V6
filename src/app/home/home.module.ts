import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {VmensagemModule} from '../shared/components/vmensagem/vmensagem.module';
import {InscreverComponent} from './inscrever/inscrever.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VmensagemModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    InscreverComponent
  ]
})
export class HomeModule {

}
