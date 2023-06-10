import { Variables } from "../utils/variables";
import { ProductosService } from "src/app/shared/service/productos.service";

export module FunctionGetCuellos {
  export function getAll(
    service: ProductosService,
    variables?: Variables
  ) {
    service.getCuello().subscribe({
      next: (cuellos) => {
        variables!.cuellos = cuellos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
