import { FormGroup } from "@angular/forms";
import { Cuello } from "../models/cuello";
import { Producto } from "../models/producto";
import { BotonTelaSelec, Filtro } from "../interfaces/filtro";
import { Manga } from "../models/manga";
import { Cuerpo } from "../models/cuerpo";
import { Tela } from "../models/tela";
import { Boton } from "../models/boton";
import { BotonYTela } from "../models/botones_tela";
export class Variables {
  formSeleccion!: FormGroup;
  filtro!: Filtro;
  filtroBotontela!: BotonTelaSelec;
  productos: Producto[] = [];
  botones_tela: BotonYTela[] = [];
  cuellos: Cuello[] = [];
  mangas: Manga[] = [];
  cuerpos: Cuerpo[] = [];
  telas: Tela[] = [];
  botones: Boton[] = [];

  cuelloSelected?: Cuello;
  cuerpoSelected?: Cuerpo;
  mangaSelected?: Manga;
  telaSelected?: Tela;
  botonSelected?: Boton;

  bandera?: boolean;
}
