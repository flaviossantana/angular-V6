import {NgModule} from '@angular/core';
import {PhotoComponent} from './photo/photo.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import {PhotosComponent} from './photo-list/photos/photos-component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ]
})
export class PhotosModule {
}
