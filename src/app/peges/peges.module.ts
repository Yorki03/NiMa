import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { PrimengModule } from '../primeng/primeng.module';
import { PegesRoutingModule } from './peges-routing.module';
import { MaterialModule } from '../material/material.module';

//Component
import { AyudaComponent } from './ayuda/ayuda.component';
import { BarmenuComponent } from './share/barmenu/barmenu.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ConfeccionComponent } from './confeccion/confeccion.component';
import { CuelloComponent } from './components/cuello/cuello.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { FoolderComponent } from './components/foolder/foolder.component';
import { HomeComponent } from './home/home.component';
import { HomeConfeccionComponent } from './home-confeccion/home-confeccion.component';
import { MangaComponent } from './components/manga/manga.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { TelasComponent } from './components/telas/telas.component';
import { BotonComponent } from './components/boton/boton.component';





@NgModule({
  declarations: [
    MostrarComponent,
    HomeComponent,
    BarmenuComponent,
    ConfeccionComponent,
    HomeConfeccionComponent,
    AyudaComponent,
    CuelloComponent,
    CuerpoComponent,
    MangaComponent,
    TelasComponent,
    FoolderComponent,
    ContadorComponent,
    CarritoComponent,
    BotonComponent
    
  ],

  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule,
    PegesRoutingModule   
  ],

  exports: [
    MostrarComponent,
    HomeComponent,
    BarmenuComponent,
    ConfeccionComponent,
    HomeConfeccionComponent,
    AyudaComponent,
    CuelloComponent,
    CuerpoComponent,
    MangaComponent,
    TelasComponent,
    FoolderComponent,
    ContadorComponent,
    CarritoComponent
  ]
})
export class PegesModule{}
