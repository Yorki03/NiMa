import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Producto } from 'src/app/peges/confeccion/models/producto';
import { handleError } from '../functions/http-error';
import { Filtro } from 'src/app/peges/confeccion/interfaces/filtro';
import { Pedido } from 'src/app/peges/confeccion/peges/envio/model/pedido';
import { Envio } from 'src/app/peges/confeccion/peges/envio/interfaces/pedido';

@Injectable({
  providedIn: 'root'
})

export class LocalService {

  constructor(private http: HttpClient) { }

  // Buscar el producto que coincida con los filtros
  getConfeccion(filtro: Filtro): Observable<Producto[]> {

    // Orden de los parametros => :id_boton/:id_tela/:id_cuerpo/:id_cuello/:id_manga

    return this.http.get<Producto[]>(`http://localhost:3000/producto/${filtro.id_boton}/${filtro.id_tela}/${filtro.id_cuerpo}/${filtro.id_cuello}/${filtro.id_manga}`).pipe(
      map((res) => res.map((prod) => new Producto(prod))),
      catchError(handleError)
    );
  }

  //Guardar el pedido del cliente
  postPedido(pedido: Envio): Observable<Pedido[]> {
    const url = 'http://localhost:3000/pedido';
    const body = pedido;

    return this.http.post<Pedido[]>(url, body).pipe(
      map((res) => res.map((prod) => new Pedido(prod))),
      catchError(handleError)
    );
  }
}
