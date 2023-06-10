import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../../../../shared/service/productos.service';
import { Variables } from '../../utils/variables';
import { Manga } from '../../models/manga';
import { FunctionGetMangas } from '../../functions/get-mangas';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html'

})
export class MangaComponent implements OnInit {

  @Input() variables?: Variables;

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    FunctionGetMangas.getAll(
      this.productosService,
      this.variables
    );
  }

  guardarManga(manga: Manga) {
    this.variables?.formSeleccion.get('id_manga')?.setValue(manga.id_manga);
  }
}
