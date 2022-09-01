import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string,
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu: MenuItem[] = [
    { ruta: '/grafica/barras', texto: 'Barras'},
    { ruta: '/grafica/barras-doble', texto: 'Barras doble'},
    { ruta: '/grafica/dona', texto: 'Dona'},
    { ruta: '/grafica/dona-http', texto: 'Dona Http'}
  ]

}
