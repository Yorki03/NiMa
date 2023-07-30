import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductosService } from '../../../../shared/service/productos.service';
import { Variables } from '../../utils/variables';
import { Cuerpo } from '../../models/cuerpo';
import { FunctionGetCuerpos } from '../../functions/get-cuerpos';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html'
})
export class CuerpoComponent implements OnInit {

  @Input() variables?: Variables;
  @Output() validateBoton = new EventEmitter<any>();

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    FunctionGetCuerpos.getAll(
      this.productosService,
      this.variables
    );
  }

  guardarCuerpo(cuerpo: Cuerpo) {
    this.variables!.cuerpoSelected = cuerpo;
    this.variables?.formSeleccion.get('id_cuerpo')?.setValue(cuerpo.id_cuerpo);
    this.validateBoton.emit();
  }

  get selected() {
    return (this.variables?.formSeleccion.get('id_cuerpo')?.value) ? true : false;
  }
}
