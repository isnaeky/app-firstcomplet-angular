import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';
//import { APP_USUARIO_ROUTES } from './components/usuario/usuario.routes';

//Servicios
import { HeroesService } from './servicios/heroes.service';

import { ChartsModule } from 'ng2-charts';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetaHeroeComponent } from './components/tarjeta-heroe/tarjeta-heroe.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DirectiveComponent } from './components/directive/directive.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoComponent } from './components/usuario/nuevo/nuevo.component';
import { DetalleComponent } from './components/usuario/detalle/detalle.component';
import { EditarComponent } from './components/usuario/editar/editar.component';
import { BarrasComponent } from './components/graficas/barras/barras.component';
import { LineaComponent } from './components/graficas/linea/linea.component';
import { RadarComponent } from './components/graficas/radar/radar.component';
import { PastelComponent } from './components/graficas/pastel/pastel.component';
import { AreaPolarComponent } from './components/graficas/area-polar/area-polar.component';
import { BurbujaComponent } from './components/graficas/burbuja/burbuja.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { AnilloComponent } from './components/graficas/anillo/anillo.component';
import { DispersionComponent } from './components/graficas/dispersion/dispersion.component';
import { DinamicoComponent } from './components/graficas/dinamico/dinamico.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    HeroesComponent,
    AboutComponent,
    BuscarComponent,
    SearchComponent,
    TarjetaHeroeComponent,
    PipesComponent,
    CapitalizadoPipe,
    DirectiveComponent,
    UsuarioComponent,
    NuevoComponent,
    DetalleComponent,
    EditarComponent,
    BarrasComponent,
    LineaComponent,
    RadarComponent,
    PastelComponent,
    AreaPolarComponent,
    BurbujaComponent,
    GraficasComponent,
    AnilloComponent,
    DispersionComponent,
    DinamicoComponent,
    VirtualScrollComponent,
    DragdropComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    ScrollingModule,
    DragDropModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
