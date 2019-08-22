import {NgModule} from '@angular/core';
import {PhotoComponent} from './photo.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  exports: [
    PhotoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhotoModule {

}
