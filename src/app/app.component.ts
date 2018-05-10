import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 3;
  b = 5;
  listo = false;
  nombre:string = '';

  constructor(){
    setTimeout(()=> {
      this.listo = true;
    }, 3000)
  }
  hacerAlgo(){
    alert('Hiciste click');
  }
}


/* Un componente es cada uno de los elementos mas pequeños que componen un modulo como por ejemplo, cada vista que se implementaráUn modulo */
/* Aqui se inicia el componente. Solo requiere el nombre del selector, una template URL y si es necesario un archivo con los estilos css */

/* Tipos de data Bindign:
* String Interpolation {{}} TypeScript => HTML
* Property Binding [] TypeScript <= HTML
* Event Binding TypeScript <= HTML
* Two way Data Binding [()] TypeScript <=> HTML */
