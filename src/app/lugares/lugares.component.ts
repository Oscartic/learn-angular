import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent  {
  title = 'PlatziSquare';
  lugares:any = [
    {id: 1, plan: 'gratuito',cercania: 1, distancia: 1, active: true, nombre: 'Donas la pasadita' },
    {id: 2, plan: 'pagado',cercania: 1, distancia: 1.8, active: false, nombre: 'Veterinaria tu perro' },
    {id: 3, plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'Abellanas el prado' },
    {id: 4, plan: 'pagado',cercania: 3, distancia: 30, active: false, nombre: 'pinturita' },
    {id: 5, plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'SuchiRoll' },
    {id: 6, plan: 'pagado',cercania: 3, distancia: 120, active: false, nombre: 'Zapateria' },
  ];
  lat:number = -33.4376799;
  lng:number = -70.6133186;

  constructor(){

  }
}
