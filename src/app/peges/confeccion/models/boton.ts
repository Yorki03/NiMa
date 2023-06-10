export class Boton {
  id_boton: number;
  imagen: string;
  descripcion: string;

  constructor(data: any) {
    this.id_boton = data.id_boton;
    this.imagen = data.imagen;
    this.descripcion = data.descripcion;
  }

  get url() {
    return "../../../assets/recursos/boton/" + this.imagen + ".JPG"
  }
}
