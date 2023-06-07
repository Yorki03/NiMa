import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarComponent } from './mostrar/mostrar.component';
import { HomeComponent } from './home/home.component';

import { ConfeccionComponent } from './confeccion/confeccion.component';
import { HomeConfeccionComponent } from './home-confeccion/home-confeccion.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AuthGuard } from '../gards/auth.guard';




const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path:'',
                component: MostrarComponent
            },

            {
                path: 'ayuda',
                component: AyudaComponent
            },
            
            {
                path:'confeccion',
                component: ConfeccionComponent,
                canLoad: [AuthGuard]
                //canActivate: [AuthGuard]
            },

            {
                path:'carrito',
                component: CarritoComponent,
                canLoad: [AuthGuard]
                //canActivate: [AuthGuard]
                
            }
        ]
    }
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ], 
    exports: [
        RouterModule
    ]
  })
  export class PegesRoutingModule { }
  