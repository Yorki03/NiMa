import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cuello } from 'src/app/peges/confeccion/models/cuello';
import { Observable, catchError, map } from 'rxjs';
import { handleError } from '../functions/http-error';
import { Manga } from 'src/app/peges/confeccion/models/manga';
import { Cuerpo } from 'src/app/peges/confeccion/models/cuerpo';
import { Tela } from 'src/app/peges/confeccion/models/tela';
import { Boton } from 'src/app/peges/confeccion/models/boton';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getCuello(): Observable<Cuello[]> {
    return this.http.get<Cuello[]>(`http://localhost:3000/cuello`).pipe(
      map((res) => res.map((cuello) => new Cuello(cuello))),
      catchError(handleError)
    );
  };

  getManga(): Observable<Manga[]> {
    return this.http.get<Manga[]>(`http://localhost:3000/manga`).pipe(
      map((res) => res.map((manga) => new Manga(manga))),
      catchError(handleError)
    );
  };

  getCuerpo(): Observable<Cuerpo[]> {
    return this.http.get<Cuerpo[]>(`http://localhost:3000/cuerpo`).pipe(
      map((res) => res.map((cuerpo) => new Cuerpo(cuerpo))),
      catchError(handleError)
    );
  };

  getTelas(): Observable<Tela[]> {
    return this.http.get<Tela[]>(`http://localhost:3000/telas`).pipe(
      map((res) => res.map((tela) => new Tela(tela))),
      catchError(handleError)
    );
  };

  getBotones(): Observable<Boton[]> {
    return this.http.get<Boton[]>(`http://localhost:3000/botones`).pipe(
      map((res) => res.map((boton) => new Boton(boton))),
      catchError(handleError)
    );
  };

}
