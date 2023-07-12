import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Module
import { PrimengModule } from '../shared/primeng/primeng.module';
import { PegesRoutingModule } from './peges-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

//Component
import { AyudaComponent } from './ayuda/ayuda.component';
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
import { EnvioComponent } from './confeccion/peges/envio/envio.component';

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
    BotonComponent,
    EnvioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    MaterialModule,
    PegesRoutingModule,
    ReactiveFormsModule
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
  ]
})
export class PegesModule { }
