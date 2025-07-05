import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { IniciosesionComponent } from '../iniciosesion/iniciosesion.component';
import { IniciosesionService } from './iniciosesion.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorServiceService {

  constructor(private servicioIniSesion: IniciosesionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const tokenReq = req.clone({
      setHeaders:{
        Authorization : '' + this.servicioIniSesion.getToken()
      }
    });
    return next.handle(tokenReq)
  }

}