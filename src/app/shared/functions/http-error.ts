import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

// Manejador de errores
export function handleError(error: HttpErrorResponse) {
  if (error.status === 401) {
    return throwError(error.error.message);
  }
  if (error.status === 402) {
    let errorData = {
      status: error.status,
      message: error.error.data.mensaje,
    };
    return throwError(errorData);
  }
  if (error.status === 422) {
    let mensaje = "";
    error.error.data.forEach((element: any) => {
      mensaje =
        mensaje === "" ? element.message : mensaje + ", " + element.message;
    });
    let errorData = {
      status: error.status,
      message: mensaje,
    };
    return throwError(errorData);
  }
  if (error.status === 425) {
    return throwError(error.error.data.message.errors);
  }
  if (error.status === 500) {
    return throwError(error.error.data.previous.message);
  }
  return throwError("Something bad happened; please try again later.");
}
