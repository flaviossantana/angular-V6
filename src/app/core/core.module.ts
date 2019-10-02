import {NgModule} from '@angular/core';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CabecalhoComponent
  ]
})
export class CoreModule {

}
