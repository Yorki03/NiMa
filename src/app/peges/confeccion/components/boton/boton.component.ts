import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../../../../shared/service/productos.service';
import { LocalService } from '../../../../shared/service/local.service';
import { Variables } from '../../utils/variables';
import { Boton } from '../../models/boton';
import { FunctionGetBotones } from '../../functions/get-botones';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html'
})
export class BotonComponent implements OnInit {

  @Input() variables?: Variables;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    FunctionGetBotones.getAll(
      this.productosService,
      this.variables
    );
  }

  guardarBoton(boton: Boton) {
    this.variables?.formSeleccion.get('id_boton')?.setValue(boton.id_boton);
  }
}
