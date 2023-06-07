import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MostrarComponent } from './peges/mostrar/mostrar.component';
import { Error404Component } from './error404/error404.component';



const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'peges',
    loadChildren: () => import('./peges/peges.module').then(m => m.PegesModule),
    
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: 'informacion',
    component: MostrarComponent
  },

  {
    path: '**',
    redirectTo: '404'
  }

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
