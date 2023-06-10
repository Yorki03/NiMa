export class Cuello {
  id_cuello: number;
  imagen: string;
  descripcion: string;

  constructor(data: any) {
    this.id_cuello = data.id_cuello;
    this.imagen = data.imagen;
    this.descripcion = data.descripcion;
  }

  get url() {
    return "../../../assets/recursos/cuello/" + this.imagen + ".JPG"
  }
}
