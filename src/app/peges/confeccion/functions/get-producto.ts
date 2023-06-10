import { LocalService } from "src/app/shared/service/local.service";
import { Variables } from "../utils/variables";

export module FunctionGetProducto {
  export function getAll(
    service: LocalService,
    variables?: Variables,
  ) {
    service.getConfeccion(variables!.filtro).subscribe({
      next: (productos) => {
        variables!.productos = productos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
