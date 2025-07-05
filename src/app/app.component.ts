import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';


@Component({
  //Indentificador de componentes para hacer utilizado en un archivo html
  selector: 'app-root',
  //invocacion o adiccion de librerias, modulos y componentes a nuestros proyectos 
  imports: [RouterOutlet,EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo6D';
}
