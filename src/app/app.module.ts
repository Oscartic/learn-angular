import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

// ngModule es donde se declaran los modulos que seran usados en nuestra app:
@NgModule({
  // Aqui se agregan los componentes:
  declarations: [
    AppComponent
  ],
  // Se llama todos los modulos que vamos a trabajar:
  imports: [
    BrowserModule,
    FormsModule
  ],
  // servicios que vamos a necesitar para la app:
  providers: [],
  // finalmente en bootstrap indicamos con cual componente vamos a iniciar:
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Los módulos son las piezas mas grandes en las que se pueden dividir una app, uno modulo contiene uno o varios componentes */
