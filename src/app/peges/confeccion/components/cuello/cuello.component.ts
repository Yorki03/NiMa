import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductosService } from '../../../../shared/service/productos.service';
import { Variables } from '../../utils/variables';
import { FunctionGetCuellos } from '../../functions/get-cuellos';
import { Cuello } from '../../models/cuello';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cuello',
  templateUrl: './cuello.component.html'
})

export class CuelloComponent implements OnInit {

  @Input() variables?: Variables;
  @Output() validateBoton = new EventEmitter<any>();

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
    this.validateBoton.emit();
  }

  get selected() {
    return (this.variables?.formSeleccion.get('id_cuello')?.value) ? true : false;
  }

}
