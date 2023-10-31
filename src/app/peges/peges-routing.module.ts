import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarComponent } from './mostrar/mostrar.component';
import { HomeComponent } from './home/home.component';

import { ConfeccionComponent } from './confeccion/confeccion.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { EnvioComponent } from './confeccion/peges/envio/envio.component';
import { RealizadoComponent } from './realizado/realizado.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MostrarComponent
      },

      {
        path: 'ayuda',
        component: AyudaComponent
      },

      {
        path: 'confeccion',
        component: ConfeccionComponent
      },
      {
        path: 'envio/:idProducto/:idBoton/:idTela',
        component: EnvioComponent
      },
      {
        path: 'realizado',
        component: RealizadoComponent
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
