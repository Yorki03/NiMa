
export interface Envio {
  nombre: string; 
  email: string;
  telefono: string;
  direccion:string;
  id_producto:number;
}
export interface AuthUser {
  ok: boolean;
  email?: string;
  password?: string;
  uid?: number;
  token?: string;
}

export interface User {
  email?: string;
  uid?: number;
}
