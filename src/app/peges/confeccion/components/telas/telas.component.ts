import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../../../../shared/service/productos.service';
import { Variables } from '../../utils/variables';
import { Tela } from '../../models/tela';
import { FunctionGetTelas } from '../../functions/get-telas';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html'
})
export class TelasComponent implements OnInit {

  @Input() variables?: Variables;

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    FunctionGetTelas.getAll(
      this.productoService,
      this.variables
    );
  }

  guardarTela(tela: Tela): void {
    this.variables?.formSeleccion.get('id_tela')?.setValue(tela.id_tela);
  }
}
