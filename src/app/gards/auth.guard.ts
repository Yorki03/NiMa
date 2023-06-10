import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    console.log('canActivate');

    return this.authService.validarToken()
      .pipe(
        tap(resp => {
          if (!resp) {
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');

    return this.authService.validarToken()
      .pipe(
        tap(resp => {
          if (!resp) {
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }
}
