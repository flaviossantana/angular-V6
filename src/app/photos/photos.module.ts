import {NgModule} from '@angular/core';
import {PhotoComponent} from './photo/photo.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  exports: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [

  ]
})
export class PhotosModule {
}
