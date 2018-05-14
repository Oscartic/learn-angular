import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {cercania: 1, distancia: 1, active: true, nombre: 'Donas la pasadita' },
    {cercania: 1, distancia: 1.8, active: false, nombre: 'Veterinaria tu perro' },
    {cercania: 2, distancia: 5, active: true, nombre: 'Abellanas el prado' },
    {cercania: 3, distancia: 30, active: false, nombre: 'pinturita' },
    {cercania: 2, distancia: 5, active: true, nombre: 'SuchiRoll' },
    {cercania: 3, distancia: 120, active: false, nombre: 'Zapateria' },

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
