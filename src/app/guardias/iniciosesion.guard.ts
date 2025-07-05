import { inject, Inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { IniciosesionService } from "../servicios/iniciosesion.service";

export const iniciosesionGuard: CanActivateFn = (route, state) =>{
  const servicioLogin = inject(IniciosesionService);
  const router = inject(Router);

  if (servicioLogin.esLogueado()){
    return true;
  }
  else{
    router.navigate(['/iniciosesion']);
    return false;
  }
};