import { Variables } from "../utils/variables";
import { ProductosService } from "src/app/shared/service/productos.service";

export module FunctionGetCuerpos {
  export function getAll(
    service: ProductosService,
    variables?: Variables
  ) {
    service.getCuerpo().subscribe({
      next: (cuerpos) => {
        variables!.cuerpos = cuerpos;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
