import { LocalService } from "src/app/shared/service/local.service";
import { Variables } from "../utils/variables";

export module FunctionGetBotonTela {
  export function getAll(
    service: LocalService,
    variables?: Variables,
  ) {
    service.getBotonTela(variables!.filtroBotontela).subscribe({
      next: (botones_tela) => {
        variables!.botones_tela = botones_tela;        
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
