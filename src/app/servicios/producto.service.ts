  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';//esto es por que es por parte del cliente 


  @Injectable({
    providedIn: 'root'
  })
  export class ProductoService {

    private url="http://localhost:3000/productos";
    constructor(private http:HttpClient) { }

    // guardar(producto:object){
    //   return this.http.post<any>(this.url,producto);
    guardar(codigo:string,
      nombre:string,
      descripcion:string,
      existencia:string,
      precio:string,
      imagen:File){

        const fd = new FormData();
        fd.append("codigo",codigo);
        fd.append("nombre",nombre);
        fd.append("descripcion",descripcion);
        fd.append("existencia", existencia);
        fd.append("precio",precio);
        fd.append("imagen",imagen);

        return this.http.post<any>(this.url,fd);

      }
    

    consultartodo(){
      return this.http.get<any>(this.url);
    }//cierrede consultar todo

    consultar(nombre:String){
  return this.http.get<any>(this.url+"/nombre/"+nombre);
    }//cierre de consultar

    eliminar(nombre:String){

  return this.http.delete<any>(this.url+"/borrar/"+nombre);

    }//cierre de eliminar 

  modificar(producto:object){
  return this.http.put<any>(this.url,producto);
  }//cierre de modificar

  modificarimagen(imagen:File,nombre:string){
    const fd = new FormData();
    fd.append("imagen", imagen);
    fd.append("nombre", nombre);

  return this.http.put<any>(this.url+"/imagen",fd);
  }

  }//fin de la clase
