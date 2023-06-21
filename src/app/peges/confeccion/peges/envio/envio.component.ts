import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalService } from 'src/app/shared/service/local.service';
import { Envio } from './interfaces/pedido';
import { VariablesEnvio } from './utils/variables_envio';
import { FunctionPostPedido } from './functions/post-pedido';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent {

  variables = new VariablesEnvio;

  constructor(
    private localService: LocalService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.variables.miFormulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      id_producto: ['', Validators.required]
    });
  }

  enviarPedido() {
    FunctionPostPedido.postAll(
      this.localService,
      this.variables
    );
  }

}
