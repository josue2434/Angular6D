import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../servicios/producto.service';


@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
// definir todos los atributos

producto={
  codigo:"",
  nombre:"",
  descripcion:"",
  existencia:"",
  precio:"",
  imgurl:""
}

imagen:any
productos:any;

constructor(private servicioProd:ProductoService){}

fotoseleccionada(event: any): void{
  if (event.target.files && event.target.files[0]){
    this.imagen = <File>event.target.files[0];
  }
}//cierre del metodo fotoseleccionada

//las funciones o metodos 
guardarProd(){

//   if(this.producto.codigo=="" ||
//      this.producto.nombre=="" ||
//      this.producto.descripcion=="" ||
//     this.producto.existencia=="" ||
//   this.producto.precio==""){
// alert("Todos los campos deben estar llenos ")
//   }
// else{
//       alert("Voy a guardar el producto")
//     this.limpiar();
//  }

// 
  
if(this.producto.codigo!="" &&
  this.producto.nombre!=="" &&
  this.producto.descripcion!=="" &&
  this.producto.existencia!=="" &&
  this.producto.precio!=="" 
){
this.servicioProd.guardar(this.producto.codigo,
                          this.producto.nombre,
                           this.producto.descripcion,
                           this.producto.existencia,
                           this.producto.precio,
                           this.imagen

  ).subscribe(
        res=>{
          alert(res.msj);
          this.limpiar();
          this.verLista();
          //console.log(res.msj);
        },
        err=>{
          alert(err.error.errores[0].msg);
          console.log(err.error.errores[0].msg);
        }
      );
      alert("Voy a guardar el producto");
      this.limpiar();

    }else{
      alert("Todos los campos estan llenos");


  }
}

verLista(){
  //console.log(this.servicioProd.consultartodo());
this.servicioProd.consultartodo().subscribe(
  res=>{
    console.log(res);
    this.productos = res.pro;
  },
  err=>{
     console.log(err);
  }
)
}
//CIERRE 
 consultarProd(){
  this.servicioProd.consultar(this.producto.nombre).subscribe(
    res=>{
      this.producto.codigo = res.producto.codigo;
this.producto.nombre = res.producto.nombre;
this.producto.descripcion = res.producto.descripcion;
this.producto.existencia = res.producto.existencia;
this.producto.precio = res.producto.precio;
this.producto.imgurl = res.producto.imgurl;


    },
    err=>{
      alert("Producto no encontrado");
      this.producto.codigo = "";
      this.producto.nombre = "";
      this.producto.descripcion = "";
      this.producto.existencia = "";
      this.producto.precio = "";
      this.producto.imgurl ="";
    },

  );
 }//cierre de consultarProd

eliminarProd(){
  this.servicioProd.eliminar(this.producto.nombre).subscribe(
    res=>{
      this.limpiar();
      alert("Producto eliminado");
      this.verLista();
    },

    err=>{
      alert("Producto no eliminado");
    }
  );
}//cierre de eliminarProd


modificarProd(){
this.servicioProd.modificar(this.producto).subscribe(
  res=>{
    this.limpiar();
    alert("Producto modificado");
    this.verLista();  
  },
  err=>{
    alert("Error al modificar el producto");
  }
);
}//cierre de modificarProd

modificarImagen(){
  this.servicioProd.modificarimagen(this.imagen,this.producto.nombre).subscribe(
    res=>{
      alert("Imagen modificada");
      this.limpiar();
      this.verLista();
    },

    err=>{
      alert("Error al modificar imagen");
    }
  );
}


limpiar(){
this.producto.codigo="";
this.producto.nombre="";
this.producto.descripcion="";
this.producto.existencia="";
this.producto.precio="";
this.producto.imgurl="";
}

}