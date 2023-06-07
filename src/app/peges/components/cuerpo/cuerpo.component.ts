import { Component, OnInit } from '@angular/core';
import { Cuerpo } from '../../interfaces/interface.interface';
import { ProductosService } from '../../../service/productos.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html'
})
export class CuerpoComponent implements OnInit{

  cuerpos: Cuerpo[] = [];

  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
    this.productosService.getCuerpo().subscribe((cars:any)=>(this.cuerpos = cars));
  }

  guardarCuerpo(id: number){
    console.log(id);
  }
}
