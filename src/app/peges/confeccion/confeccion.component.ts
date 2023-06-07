import { Component, OnInit } from '@angular/core';
import { Productos } from '../interfaces/interface.interface';
import { LocalService } from '../../service/local.service';


@Component({
  selector: 'app-confeccion',
  templateUrl: './confeccion.component.html',
  styleUrls: ['./confeccion.component.css']
})
export class ConfeccionComponent implements OnInit{
  
  productos: Productos[] = [];

  constructor(private localService: LocalService){}

  ngOnInit(): void {
    this.localService.getConfeccion().subscribe(product=>{
      console.log(product);
      this.productos = product;
    });
      
  }

}
