import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {CommonModule} from '@angular/common';
import {EscureceAoPairarModules} from '../../directive/escurece-ao-pairar/escurece-ao-pairar.modules';

@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    EscureceAoPairarModules
  ]
})
export class CardModule {

}
