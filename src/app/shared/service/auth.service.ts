import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { User, AuthUser } from '../../peges/confeccion/interfaces/interface.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario!: User;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const url = 'http://localhost:3000/login';
    const body = { email, password };

    return this.http.post<AuthUser>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!);
            this._usuario = {
              email: resp.email,
              uid: resp.uid
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      );
  }

  validarToken(): Observable<boolean> {
    const url = 'http://localhost:3000/renew';
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthUser>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            email: resp.email,
            uid: resp.uid
          }
          return resp.ok;
        }),
        catchError(err => of(false))
      );
  }
}
