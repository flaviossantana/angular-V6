import {NgModule} from '@angular/core';
import {PhotoComponent} from './photo/photo.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent
  ],
  exports: [
    PhotoComponent,
    PhotoListComponent
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
