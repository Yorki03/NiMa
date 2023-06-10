import { Variables } from "../utils/variables";
import { ProductosService } from "src/app/shared/service/productos.service";

export module FunctionGetMangas {
  export function getAll(
    service: ProductosService,
    variables?: Variables
  ) {
    service.getManga().subscribe({
      next: (mangas) => {
        variables!.mangas = mangas;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
