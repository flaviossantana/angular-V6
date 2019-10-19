import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  fotoForm: FormGroup;

  ngOnInit() {
    this.fotoForm = this.fb.group({
      file: [
        '',
        Validators.required
      ],
      description : [
        '',
        Validators.maxLength(300)
      ],
      allowComments : [
        true
      ]
    })
  }

}
