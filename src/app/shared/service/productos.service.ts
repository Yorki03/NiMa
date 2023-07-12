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
    return this.http.get<Cuello[]>(`https://nima-t0xd.onrender.com/cuello`).pipe(
      map((res) => res.map((cuello) => new Cuello(cuello))),
      catchError(handleError)
    );
  };

  getManga(): Observable<Manga[]> {
    return this.http.get<Manga[]>(`https://nima-t0xd.onrender.com/manga`).pipe(
      map((res) => res.map((manga) => new Manga(manga))),
      catchError(handleError)
    );
  };

  getCuerpo(): Observable<Cuerpo[]> {
    return this.http.get<Cuerpo[]>(`https://nima-t0xd.onrender.com/cuerpo`).pipe(
      map((res) => res.map((cuerpo) => new Cuerpo(cuerpo))),
      catchError(handleError)
    );
  };

  getTelas(): Observable<Tela[]> {
    return this.http.get<Tela[]>(`https://nima-t0xd.onrender.com/telas`).pipe(
      map((res) => res.map((tela) => new Tela(tela))),
      catchError(handleError)
    );
  };

  getBotones(): Observable<Boton[]> {
    return this.http.get<Boton[]>(`https://nima-t0xd.onrender.com/botones`).pipe(
      map((res) => res.map((boton) => new Boton(boton))),
      catchError(handleError)
    );
  };

}
