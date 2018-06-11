import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent  {
  lugares:any = [
    {id: 1, plan: 'gratuito',cercania: 1, distancia: 1, active: true, nombre: 'Donas la pasadita', descripcion: 'Descripcion de este negocio' },
    {id: 2, plan: 'pagado',cercania: 1, distancia: 1.8, active: false, nombre: 'Veterinaria tu perro', descripcion: 'Descripcion de este negocio' },
    {id: 3, plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'Abellanas el prado', descripcion: 'Descripcion de este negocio' },
    {id: 4, plan: 'pagado',cercania: 3, distancia: 30, active: false, nombre: 'pinturita', descripcion: 'Descripcion de este negocio' },
    {id: 5, plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'SuchiRoll', descripcion: 'Descripcion de este negocio' },
    {id: 6, plan: 'pagado',cercania: 3, distancia: 120, active: false, nombre: 'Zapateria', descripcion: 'Descripcion de este negocio' },
  ];
  id = null;
  lugar:any = {};
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']); // Acceder al id que se envia por parametro
    console.log(this.route.snapshot.queryParams['action']); // Acceder a los parametros query
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }
  buscarLugar() {
    return this.lugares.filter((lugar) => { return lugar.id == this.id})[0] || null;
  }
}
