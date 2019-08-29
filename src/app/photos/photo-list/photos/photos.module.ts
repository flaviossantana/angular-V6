import {NgModule} from '@angular/core';
import {PhotosComponent} from './photos-component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../../shared/components/card/card.module';
import {PhotoModule} from '../../photo/photo.module';
import {EscureceAoPairarModules} from '../../../shared/directive/escurece-ao-pairar/escurece-ao-pairar.modules';

@NgModule({
  declarations: [
    PhotosComponent
  ],
  exports: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    EscureceAoPairarModules
  ]
})
export class PhotosModule {

}
