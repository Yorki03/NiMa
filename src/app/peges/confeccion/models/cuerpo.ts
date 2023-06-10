export class Cuerpo {
  id_cuerpo: number;
  imagen: string;
  descripcion: string;

  constructor(data: any) {
    this.id_cuerpo = data.id_cuerpo;
    this.imagen = data.imagen;
    this.descripcion = data.descripcion;
  }

  get url() {
    return "../../../assets/recursos/cuerpo/" + this.imagen + ".JPG"
  }
}
