export class Tela {
  id_tela: number;
  imagen: string;
  descripcion: string;

  constructor(data: any) {
    this.id_tela = data.id_tela;
    this.imagen = data.imagen;
    this.descripcion = data.descripcion;
  }

  get url() {
    return "../../../assets/recursos/telas/" + this.imagen + ".jpg"
  }
}
