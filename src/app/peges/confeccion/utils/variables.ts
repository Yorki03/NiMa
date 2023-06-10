import { FormGroup } from "@angular/forms";
import { Cuello } from "../models/cuello";
import { Producto } from "../models/producto";
import { Filtro } from "../interfaces/filtro";
import { Manga } from "../models/manga";
import { Cuerpo } from "../models/cuerpo";
import { Tela } from "../models/tela";
import { Boton } from "../models/boton";

export class Variables {
  formSeleccion!: FormGroup;
  filtro!: Filtro;
  productos: Producto[] = [];
  cuellos: Cuello[] = [];
  mangas: Manga[] = [];
  cuerpos: Cuerpo[] = [];
  telas: Tela[] = [];
  botones: Boton[] = [];
}
