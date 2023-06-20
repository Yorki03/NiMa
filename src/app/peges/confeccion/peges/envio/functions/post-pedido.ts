import { LocalService } from "src/app/shared/service/local.service";
import { VariablesEnvio } from "../utils/variables_envio";

export module FunctionPostPedido {
  export function postAll(
    service: LocalService,
    variables?: VariablesEnvio,
  ) {
    service.postPedido(variables!.envio).subscribe({
      next: (pedidos) => {
        variables!.pedidos = pedidos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
