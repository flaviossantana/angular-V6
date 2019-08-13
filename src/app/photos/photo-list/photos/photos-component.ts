import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../photo';

@Component({
  selector : 'ap-photos',
  templateUrl: 'photos-component.html'})
export class PhotosComponent implements OnInit {

  @Input() fotos: Photo[] = [];

  ngOnInit(): void {

  }

}
