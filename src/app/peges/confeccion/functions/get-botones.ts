import { Variables } from "../utils/variables";
import { ProductosService } from "src/app/shared/service/productos.service";

export module FunctionGetBotones {
  export function getAll(
    service: ProductosService,
    variables?: Variables
  ) {
    service.getBotones().subscribe({
      next: (botones) => {
        variables!.botones = botones;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
