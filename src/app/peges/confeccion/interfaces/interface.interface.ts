
export interface Usiario {
  id: number;
  user: string;
  email: string;
  img?: string;
}

export interface Cuerpo {
  id: number;
  imagen: string;
}

export interface Manga {
  id: number;
  imagen: string;
}

export interface Telas {
  id: number;
  imagen: string;
}

export interface Botones {
  id: number;
  imagen: string;
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
