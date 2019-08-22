import {NgModule} from '@angular/core';
import {PhotosComponent} from './photos-component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../../shared/components/card/card.module';
import {PhotoModule} from '../../photo/photo.module';

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
    CardModule
  ]
})
export class PhotosModule {

}
