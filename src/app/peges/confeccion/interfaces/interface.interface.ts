
export interface Usiario {
  id: number;
  user: string;
  email: string;
  img?: string;
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
