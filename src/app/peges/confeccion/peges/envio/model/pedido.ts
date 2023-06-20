export class Pedido{
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    id_producto: number;

    constructor(data: any){
        this.nombre = data.nombre;
        this.email = data.email;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.id_producto = data.id_producto
    }

}