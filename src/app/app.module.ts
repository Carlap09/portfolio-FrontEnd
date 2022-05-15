import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    ProyectosComponent,
    AptitudesComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
