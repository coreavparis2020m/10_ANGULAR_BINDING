import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  hora: string;

  constructor() { }

  ngOnInit(): void {
  }

  getHora() {
    let h = new Date().getHours();
    let hh = ('0' + h).slice(-2);
    let m = new Date().getMinutes();
    let mm = ('0' + m).slice(-2);
    let s = new Date().getSeconds();
    let ss = ('0' + s).slice(-2);

    this.hora = `Son las ${hh}:${mm}:${ss}`;
  }

}
