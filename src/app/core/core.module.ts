import {NgModule} from '@angular/core';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabecalhoComponent
  ]
})
export class CoreModule {

}
