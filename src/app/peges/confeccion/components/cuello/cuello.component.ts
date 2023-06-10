import { Component, OnInit } from '@angular/core';
import { Cuello } from '../../interfaces/interface.interface';
import { ProductosService } from '../../../../shared/service/productos.service';
import { LocalService } from '../../../../shared/service/local.service';

@Component({
  selector: 'app-cuello',
  templateUrl: './cuello.component.html'
})

export class CuelloComponent implements OnInit {

  cuellos: Cuello[] = [];


  constructor(private productosService: ProductosService,
    private localService: LocalService) { }

  ngOnInit(): void {
    this.productosService.getCuello().subscribe((cars: any) => (this.cuellos = cars));
  }

  guardarCuello(id: number) {
    let stringValue = id.toString();
    console.log(stringValue);
    this.localService.setIdCuello(stringValue);
  }

}
