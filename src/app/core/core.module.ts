import {NgModule} from '@angular/core';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth/AuthInterceptor';
import {RodapeComponent} from "./rodape/rodape.component";

@NgModule({
  declarations: [
    CabecalhoComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CabecalhoComponent,
    RodapeComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {

}
