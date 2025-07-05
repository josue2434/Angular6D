import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url = "http://localhost:3000/empleados";

  constructor(private http: HttpClient) {}

  guardar(codigo: string,
          nombre: string,
          apellido_paterno: string,
          apellido_materno: string,
          puesto: string,
          sueldo: string,
          correo: string,
          imagen: File) {

    const fd = new FormData();
    fd.append("codigo", codigo);
    fd.append("nombre", nombre);
    fd.append("apellido_paterno", apellido_paterno);
    fd.append("apellido_materno", apellido_materno);
    fd.append("puesto", puesto);
    fd.append("sueldo", sueldo);
    fd.append("correo", correo);
    fd.append("imagen", imagen);

    return this.http.post<any>(this.url, fd);
  }

  consultartodo() {
    return this.http.get<any>(this.url);
  }
}
