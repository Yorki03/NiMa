import { Variables } from "../utils/variables";
import { ProductosService } from "src/app/shared/service/productos.service";

export module FunctionGetTelas {
  export function getAll(
    service: ProductosService,
    variables?: Variables
  ) {
    service.getTelas().subscribe({
      next: (telas) => {
        variables!.telas = telas;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
