import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { PrimengModule } from '../shared/primeng/primeng.module';
import { PegesRoutingModule } from './peges-routing.module';
import { MaterialModule } from '../shared/material/material.module';

//Component
import { AyudaComponent } from './ayuda/ayuda.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContadorComponent } from '../shared/components/contador/contador.component';
import { ConfeccionComponent } from './confeccion/confeccion.component';
import { CuelloComponent } from './confeccion/components/cuello/cuello.component';
import { CuerpoComponent } from './confeccion/components/cuerpo/cuerpo.component';
import { FoolderComponent } from '../shared/components/foolder/foolder.component';
import { HomeComponent } from './home/home.component';
import { HomeConfeccionComponent } from './home-confeccion/home-confeccion.component';
import { MangaComponent } from './confeccion/components/manga/manga.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { TelasComponent } from './confeccion/components/telas/telas.component';
import { BotonComponent } from './confeccion/components/boton/boton.component';


@NgModule({
  declarations: [
    MostrarComponent,
    HomeComponent,
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
export class PegesModule { }
