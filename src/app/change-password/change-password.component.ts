import { PasswordValidators } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      contrasenaAnterior: ['', 
        Validators.required, 
        PasswordValidators.validarContrasenaAnterior
      ],
      contrasenaNueva: ['', Validators.required],
      confirmarContrasena: ['', Validators.required]
    }, {
      validator: PasswordValidators.validarContrasenas
    });
  }

  get contrasenaAnterior() {
    return this.form.get('contrasenaAnterior');
  }

  get contrasenaNueva() {
    return this.form.get('contrasenaNueva');
  }

  get confirmarContrasena() {
    return this.form.get('confirmarContrasena');
  }

  ngOnInit() {
  }

  

}
