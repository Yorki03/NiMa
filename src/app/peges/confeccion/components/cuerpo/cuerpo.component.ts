import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../../../../shared/service/productos.service';
import { Variables } from '../../utils/variables';
import { Cuerpo } from '../../models/cuerpo';
import { FunctionGetCuerpos } from '../../functions/get-cuerpos';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html'
})
export class CuerpoComponent implements OnInit {

  @Input() variables?: Variables;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    FunctionGetCuerpos.getAll(
      this.productosService,
      this.variables
    );
  }

  guardarCuerpo(cuerpo: Cuerpo) {
    this.variables?.formSeleccion.get('id_cuerpo')?.setValue(cuerpo.id_cuerpo);
  }
}
