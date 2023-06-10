import { Component, OnInit } from '@angular/core';
import { Botones } from '../../interfaces/interface.interface';
import { ProductosService } from '../../../../shared/service/productos.service';
import { LocalService } from '../../../../shared/service/local.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html'
})
export class BotonComponent implements OnInit {

  private numberValue!: number;
  botones: Botones[] = [];

  constructor(private productosService: ProductosService,
    private localService: LocalService) { }

  ngOnInit(): void {
    this.productosService.getBotones().subscribe((cars: any) => (this.botones = cars));
  }

  guardarBoton(id: number) {
    console.log(id);
  }
}
