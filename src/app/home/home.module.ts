import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {VmensagemModule} from '../shared/components/vmensagem/vmensagem.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VmensagemModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class HomeModule {

}
