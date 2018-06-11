import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from './directives/resaltar.directive';
import {ContarClicksDirective} from './directives/contar-clicks.directive';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DetalleComponent} from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';
import {ContactoComponent} from './contacto/contacto.component';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
];


// ngModule es donde se declaran los modulos que seran usados en nuestra app:
@NgModule({
  // Aqui se agregan los componentes:
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],
  // Se llama todos los modulos que vamos a trabajar:
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8hTXGdoxiRvU0oHwowLUmgKEeqjkKKFc'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  // servicios que vamos a necesitar para la app:
  providers: [],
  // finalmente en bootstrap indicamos con cual componente vamos a iniciar:
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Los módulos son las piezas mas grandes en las que se pueden dividir una app, uno modulo contiene uno o varios componentes */
