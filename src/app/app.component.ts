import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {active: true, nombre: 'Floreria la gardenia' },
    {active: true, nombre: 'Donas la pasadita' },
    {active: false, nombre: 'Veterinaria tu perro' },
    {active: true, nombre: 'Abellanas el prado' },
    {active: false, nombre: 'pinturita' }
  ];
  lat:number = -33.4376799;
  lng:number = -70.6133186;

  constructor(){

  }
}


/* Un componente es cada uno de los elementos mas pequeños que componen un modulo como por ejemplo, cada vista que se implementaráUn modulo */
/* Aqui se inicia el componente. Solo requiere el nombre del selector, una template URL y si es necesario un archivo con los estilos css */

/* Tipos de data Bindign:
* String Interpolation {{}} TypeScript => HTML
* Property Binding [] TypeScript <= HTML
* Event Binding TypeScript <= HTML
* Two way Data Binding [()] TypeScript <=> HTML */
