import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Producto } from 'src/app/peges/confeccion/models/producto';
import { handleError } from '../functions/http-error';
import { BotonTelaSelec, Filtro } from 'src/app/peges/confeccion/interfaces/filtro';
import { Pedido } from 'src/app/peges/confeccion/peges/envio/model/pedido';
import { Envio } from 'src/app/peges/confeccion/peges/envio/interfaces/interface';
import { BotonYTela } from 'src/app/peges/confeccion/models/botones_tela';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  // Buscar el producto que coincida con los filtros
  getConfeccion(filtro: Filtro): Observable<Producto[]> {
    if (filtro.id_boton) {
      // Orden de los parametros => :id_boton/:id_tela/:id_cuerpo/:id_cuello/:id_manga
      return this.http.get<Producto[]>(`${baseUrl}/producto/${filtro.id_boton}/${filtro.id_tela}/${filtro.id_cuerpo}/${filtro.id_cuello}/${filtro.id_manga}`).pipe(
        map((res) => res.map((prod) => new Producto(prod))),
        catchError(handleError)
      );
    } else {
      // Orden de los parametros => :id_tela/:id_cuerpo/:id_cuello/:id_manga
      return this.http.get<Producto[]>(`${baseUrl}/producto-sin-boton/${filtro.id_tela}/${filtro.id_cuerpo}/${filtro.id_cuello}/${filtro.id_manga}`).pipe(
        map((res) => res.map((prod) => new Producto(prod))),
        catchError(handleError)
      );
    }
  }

  // Buscar el producto que coincida con los filtros de los botone y las telas
  getBotonTela(filtro: BotonTelaSelec): Observable<BotonYTela[]> {

    // Orden de los parametros => :id_boton/:id_tela/
    return this.http.get<BotonYTela[]>(`${baseUrl}/botonYtela/${filtro.id_boton}/${filtro.id_tela}`).pipe(
      map((res) => res.map((prod) => new BotonYTela(prod))),
      catchError(handleError)
    );
  }

  getPrecio(filtro: any): Observable<BotonYTela[]> {

    // Orden de los parametros => :id_boton/:id_tela/
    return this.http.get<BotonYTela[]>(`${baseUrl}/botonYtela/${filtro.id_boton}/${filtro.id_tela}`).pipe(
      map((res) => res.map((prod) => new BotonYTela(prod))),
      catchError(handleError)
    );
  }

  //Guardar el pedido del cliente
  postPedido(pedido: Envio): Observable<Pedido[]> {
    const url = `${baseUrl}/pedido`;
    const body = pedido;

    return this.http.post<Pedido[]>(url, body).pipe(
      map((res) => res.map((prod) => new Pedido(prod))),
      catchError(handleError)
    );
  }

}
