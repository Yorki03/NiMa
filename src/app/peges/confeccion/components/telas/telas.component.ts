import { Component, OnInit } from '@angular/core';
import { Telas } from '../../interfaces/interface.interface';
import { ProductosService } from '../../../../shared/service/productos.service';
import { LocalService } from '../../../../shared/service/local.service';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html'
})
export class TelasComponent implements OnInit {
  private numberValue!: number;
  telas: Telas[] = [];

  constructor(private productoService: ProductosService, private localService: LocalService) { }

  ngOnInit(): void {
    this.productoService.getTelas().subscribe((cars: any) => (this.telas = cars));
  }

  guardarTela(id: number): void {
    console.log(id);
    this.numberValue = id;
    const stringValue = this.numberValue.toString();
    console.log(stringValue);
    this.localService.setIdTela(stringValue);

  }

}
