import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  empleado = {
    codigo: "",
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    puesto: "",
    sueldo: "",
    correo: "",
    imgurl: ""
  }

  imagen: any;
  empleados: any;

  constructor(private servicioEmp: EmpleadoService) {}

  fotoseleccionada(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.imagen = <File>event.target.files[0];
    }
  }

  guardarEmp() {
    if (
      this.empleado.codigo !== "" &&
      this.empleado.nombre !== "" &&
      this.empleado.apellido_paterno !== "" &&
      this.empleado.apellido_materno !== "" &&
      this.empleado.puesto !== "" &&
      this.empleado.sueldo !== "" &&
      this.empleado.correo !== ""
    ) {
      this.servicioEmp.guardar(
        this.empleado.codigo,
        this.empleado.nombre,
        this.empleado.apellido_paterno,
        this.empleado.apellido_materno,
        this.empleado.puesto,
        this.empleado.sueldo,
        this.empleado.correo,
        this.imagen
      ).subscribe(
        res => {
          console.log(res.msj);
        },
        err => {
          alert(err.error.errores[0].msg);
          console.log(err.error.errores[0].msg);
        }
      );
      alert("Voy a guardar el empleado");
      this.limpiar();
    } else {
      alert("Todos los campos están llenos");
    }
  }

  verLista() {
    this.servicioEmp.consultartodo().subscribe(
      res => {
        console.log(res);
        this.empleados = res.pro;
      },
      err => {
        console.log(err);
      }
    );
  }

  limpiar() {
    this.empleado.codigo = "";
    this.empleado.nombre = "";
    this.empleado.apellido_paterno = "";
    this.empleado.apellido_materno = "";
    this.empleado.puesto = "";
    this.empleado.sueldo = "";
    this.empleado.correo = "";
  }

}
