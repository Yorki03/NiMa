import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../shared/service/local.service';
import { Variables } from './utils/variables';
import { FormBuilder, Validators } from '@angular/forms';
import { FunctionGetProducto } from './functions/get-producto';
import { FunctionGetBotonTela } from './functions/get-botones_tela';

@Component({
  selector: 'app-confeccion',
  templateUrl: './confeccion.component.html',
  styleUrls: ['./confeccion.component.css']
})
export class ConfeccionComponent implements OnInit {

  variables = new Variables();

  constructor(
    private localService: LocalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.variables.formSeleccion = this.formBuilder.group({
      id_boton: ['', Validators.required],
      id_tela: ['', Validators.required],
      id_cuerpo: ['', Validators.required],
      id_cuello: ['', Validators.required],
      id_manga: ['', Validators.required]
    });

    this.variables.formSeleccion.valueChanges.subscribe(values => {
      this.variables.filtro = values;
      this.variables.filtroBotontela = values;
      
      // Solo llamo a la api a buscar el producto si el formulario es válido
      if (!this.variables.formSeleccion.invalid) {
        // Busco el producto que coincide con la selección
        FunctionGetProducto.getAll(
          this.localService,
          this.variables
        );
        
        //Busco los botones y las telas que coinciden con la seleccion
        FunctionGetBotonTela.getAll(
          this.localService,
          this.variables
        );
        
      }
    });

  }
}
