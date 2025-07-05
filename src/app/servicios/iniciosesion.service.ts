import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {
  private url ="http://localhost:3000/clientes/iniciosesion";

  constructor(private http:HttpClient,private router:Router) { }

  login (usuario:object){
    return this.http.post<any>(this.url,usuario);

  }
  cerrarSesion(){
    //borrar una variable de localStorage
    // localStorage.removeItem("token");
    //borrar todas las variables del localStorage
    localStorage.clear();
    this.router.navigate(["/iniciosesion"]);
  }
  esLogueado():boolean{
       /* if(localStorage.getItem("token")!=null){
      return true;
    }
    else{
      return false;
    }
      */
 return !!localStorage.getItem("token");

  }

  getToken(){
    return localStorage.getItem("token");
  }
  tuperfil(){
    //Saber Cual es el puesto del empleado
    return localStorage.getItem("perfil");
  }
}