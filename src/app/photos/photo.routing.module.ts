import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {PhotoListResolver} from './photo-list/photo-list.resolver';
import {PhotoFormComponent} from './photo-form/photo-form.component';

const rotas: Routes = [
  {
    path: ':usuario',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(rotas)]
})
export class PhotoRoutingModule {

}
