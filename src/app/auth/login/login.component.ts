import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
import { AuthUser } from '../../peges/confeccion/peges/envio/interfaces/pedido';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['tes1@tes.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  login() {

    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((resp: any) => {
      console.log(resp);
      if (resp === true) {
        this.router.navigateByUrl('/peges');
      } else {
        Swal.fire('Error', resp, 'error');
      }
    });
  }
}
