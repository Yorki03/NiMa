import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RigistrarseComponent } from './rigistrarse/rigistrarse.component';


const routes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'registro',
      component: RigistrarseComponent
    },
    {
      path: '**',
      redirectTo: 'login'
    }
      
    ]
  }
  
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ], 
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
