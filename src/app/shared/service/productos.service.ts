import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga, Cuerpo, Telas, Botones } from '../../peges/confeccion/interfaces/interface.interface';
import { Cuello } from 'src/app/peges/confeccion/models/cuello';
import { catchError, map } from 'rxjs';
import { handleError } from '../functions/http-error';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getCuello() {
    return this.http.get<Cuello[]>(`http://localhost:3000/cuello`).pipe(
      map((res) => res.map((cuello) => new Cuello(cuello))),
      catchError(handleError)
    );
  };

  getManga() {
    return this.http.get<Manga[]>('http://localhost:3000/manga');
  };

  getCuerpo() {
    return this.http.get<Cuerpo[]>('http://localhost:3000/cuerpo');
  }
  getTelas() {
    return this.http.get<Telas[]>('http://localhost:3000/telas');
  }
  getBotones() {
    return this.http.get<Botones[]>('http://localhost:3000/botones');
  }

}
