import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalService } from '../../shared/service/local.service';
import { Variables } from './utils/variables';
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
    });
  }

  validarFormulario() {
    const id_cuello = this.variables.formSeleccion.get('id_cuello')?.value;
    const id_cuerpo = this.variables.formSeleccion.get('id_cuerpo')?.value;

    if ((id_cuello == '3' || id_cuello == '4' || id_cuello == '5') && (id_cuerpo == '1' || id_cuerpo == '3' || id_cuerpo == '5')) {
      this.variables.bandera = true;
      this.variables.formSeleccion.get('id_boton')?.clearValidators();
      this.variables.formSeleccion.get('id_boton')?.updateValueAndValidity();
      this.variables.botonSelected = undefined;
    } else {
      this.variables.bandera = false;
      this.variables.formSeleccion.get('id_boton')?.setValidators([Validators.required]);
      this.variables.formSeleccion.get('id_boton')?.updateValueAndValidity();

      if (this.variables.productos.length > 0) {
        this.variables.productos = [...[]];
      }
    }

    // Solo llamo a la api a buscar el producto si el formulario es válido
    if (this.variables.formSeleccion.valid) {
      console.log("buscando...");

      // Busco el producto que coincide con la selección
      FunctionGetProducto.getAll(
        this.localService,
        this.variables
      );

      if (!this.variables.bandera) {
        //Busco los botones y las telas que coinciden con la seleccion
        FunctionGetBotonTela.getAll(
          this.localService,
          this.variables
        );
      }
    }
  }
}
