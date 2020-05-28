import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

    actor1 = {
      nombre: 'Robert',
      apellidos: 'De Niro',
      fechaNacimiento: new Date(1943, 7, 17)
    }

    constructor() { }

    ngOnInit(): void {
    }

    getEdad() {
      let edad = ( new Date().getTime() - this.actor1.fechaNacimiento.getTime() ) / ( 365 * 24 * 60 * 60 * 1000);
      return Math.ceil(edad);
    }

}
