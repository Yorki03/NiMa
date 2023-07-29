import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/shared/service/local.service';
import { VariablesEnvio } from './utils/variables_envio';
import { FunctionPostPedido } from './functions/post-pedido';
import { BotonTelaSelec } from '../../interfaces/filtro';

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

    const id_boton = this.route.snapshot.paramMap.get('idBoton');
    const id_tela = this.route.snapshot.paramMap.get('idTela');

    const filtro = {
      id_boton: id_boton,
      id_tela: id_tela
    }

    this.localService.getPrecio(filtro).subscribe({
      next: (botones_tela) => {
        this.variables.precio = botones_tela[0].precio;
      },
      error: (error) => {
        console.log(error);
      }
    });

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
