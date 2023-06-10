export class Manga {
  id_manga: number;
  imagen: string;
  descripcion: string;

  constructor(data: any) {
    this.id_manga = data.id_manga;
    this.imagen = data.imagen;
    this.descripcion = data.descripcion;
  }

  get url() {
    return "../../../assets/recursos/manga/" + this.imagen + ".JPG"
  }
}
