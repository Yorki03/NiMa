import { FormGroup } from "@angular/forms";
import { Pedido } from "../model/pedido";
import { Envio } from "../interfaces/pedido";

export class VariablesEnvio {
  miFormulario!: FormGroup;
  pedidos: Pedido[] = [];
  envio!: Envio;
  idProducto!: string | null;
}
