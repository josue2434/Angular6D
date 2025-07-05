import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  imports: [FormsModule,CommonModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  //para  atributos 
  //valor:number =0;

  valor=0;

  edad="";
  puesto="";
  nombre="";
  genero="";
  sueldo="";

cuatri=""

  frutas=["Banana","Fresa","Apple","Aguacate"];
  verduras=["Ejotes", "Chayotes", "Papas", "Zanahorias"];

  productos=[
    {nombre:"FITO", tipo:"MAMIFERO TERR", raza:"Chihuahua", sexo:"Macho",precio:"500", talla:"CH"},
    {nombre:"Michi", tipo:"Acuatico", raza:"Pez", sexo:"Femenino",precio:"600", talla:"G"},
    {nombre:"Pikachu", tipo:"Rayo", raza:"Roedor", sexo:"Macho",precio:"4500", talla:"M"},
    {nombre:"Sanson", tipo:"Mamifero", raza:"Elefante", sexo:"Femenino",precio:"800", talla:"XL"}
  ]
  
  
  //para funciones
}
