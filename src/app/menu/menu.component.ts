import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IniciosesionService } from '../servicios/iniciosesion.service';

@Component({
  selector: 'app-menu',
  
  imports: [RouterModule, FormsModule],
  
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(public servicioIniSesion:IniciosesionService){}

}