import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ap-login',
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', [
        Validators.required,
        Validators.minLength(4)
        ]
      ]
    });
  }

}
