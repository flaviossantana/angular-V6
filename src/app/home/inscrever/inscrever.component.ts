import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'inscrever.component.html'
})
export class InscreverComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {
  }

  inscreverForm: FormGroup;

  ngOnInit(): void {
    this.inscreverForm = this.fb.group({
      email: ['', Validators.required],
      nomeCompleto: ['', Validators.required],
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

}
