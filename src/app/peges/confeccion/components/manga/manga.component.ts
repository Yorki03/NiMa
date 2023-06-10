import { Component, OnInit } from '@angular/core';
import { Manga } from '../../interfaces/interface.interface';
import { ProductosService } from '../../../../shared/service/productos.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html'

})
export class MangaComponent implements OnInit {

  mangas: Manga[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getManga().subscribe((cars: any) => (this.mangas = cars));
  }

  guardarManga(id: number) {

    console.log(id);
  }
}
