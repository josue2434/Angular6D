import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IniciosesionService } from '../servicios/iniciosesion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  imports: [FormsModule],
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  usuario = {
    email: "",
    password: ""
  };

  constructor(
    private servicioIniciosesion: IniciosesionService,
    private router: Router
  ) {}

  login() {
    this.servicioIniciosesion.login(this.usuario).subscribe(
      (res: any) => {
        localStorage.setItem("token", res.jwtoken);
        alert(res.msj);
        this.router.navigate(['/inicio']);
      },
      (err) => {
        alert(err);
      }
    );
  }
}