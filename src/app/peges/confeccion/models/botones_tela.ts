export class BotonYTela{
    id_botontela: number;
    imagen: string;
    descripcion:string;
    precio: string;
    id_boton: number;
    id_tela: number;

    constructor(data: any){
        this.id_botontela = data.id_botontela;
        this.imagen = data.imagen;
        this.descripcion = data.descripcion;
        this.precio = data.precio;
        this.id_boton = data.id_boton;
        this.id_tela = data.id_tela;
    }

    get url() {
        return "../../../assets/botonYtela/" + this.imagen + ".JPG";
    }

    get precios(){
        return this.precio;
    }

    
}