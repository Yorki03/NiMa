export class Producto {
  id_producto: number;
  imagen: string;
  descripcion: string;
  id_boton: number;
  id_tela: number;
  id_cuerpo: number;
  id_cuello: number;
  id_manga: number;

  constructor(data: any) {
    this.id_producto = data.id_producto;
    this.imagen = data.imagen;
    this.descripcion = data.descripcion;
    this.id_boton = data.id_boton;
    this.id_tela = data.id_tela;
    this.id_cuerpo = data.id_cuerpo;
    this.id_cuello = data.id_cuello;
    this.id_manga = data.id_manga;
  }

  get url() {
    return "../../../assets/productos/" + this.imagen + ".jpg";
  }

}
