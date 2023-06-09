import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../../../../shared/service/productos.service';
import { Variables } from '../../utils/variables';
import { FunctionGetCuellos } from '../../functions/get-cuellos';
import { Cuello } from '../../models/cuello';

@Component({
  selector: 'app-cuello',
  templateUrl: './cuello.component.html'
})

export class CuelloComponent implements OnInit {

  @Input() variables?: Variables;

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    FunctionGetCuellos.getAll(
      this.productosService,
      this.variables
    );
  }

  guardarCuello(cuello: Cuello) {
    this.variables!.cuelloSelected = cuello;
    this.variables?.formSeleccion.get('id_cuello')?.setValue(cuello.id_cuello);
  }

}
