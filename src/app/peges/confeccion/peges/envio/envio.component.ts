import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/shared/service/local.service';
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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.variables.idProducto = this.route.snapshot.paramMap.get('idProducto');

    this.variables.miFormulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      id_producto: [this.variables.idProducto]
    });

  }

  enviarPedido() {
    FunctionPostPedido.postAll(
      this.localService,
      this.variables
    );
  }
  


}
