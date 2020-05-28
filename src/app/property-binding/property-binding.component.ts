import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imagen: string;

  constructor() { }

  ngOnInit(): void {
    let logoWhite = 'assets/santander-white.svg';
    let logoRed = 'assets/santander-red.svg'
    this.imagen = logoWhite;
    setInterval(() => {
      this.imagen === logoWhite ? this.imagen = logoRed : this.imagen = logoWhite;
    }, 1500);

  }

}
