import { Routes } from '@angular/router';
import { AreaPolarComponent } from './area-polar/area-polar.component';
import { BarrasComponent } from './barras/barras.component';
import { BurbujaComponent } from './burbuja/burbuja.component';
import { LineaComponent } from './linea/linea.component';
import { PastelComponent } from './pastel/pastel.component';
import { RadarComponent } from './radar/radar.component';
import { AnilloComponent } from './anillo/anillo.component';
import { DispersionComponent } from './dispersion/dispersion.component';
import { DinamicoComponent } from './dinamico/dinamico.component';

export const APP_GRAFICAS: Routes = [
    { path: 'areapolar', component: AreaPolarComponent},
    { path: 'barras', component:  BarrasComponent},
    { path: 'burbuja', component:  BurbujaComponent},
    { path: 'linea', component:  LineaComponent},
    { path: 'pastel', component:  PastelComponent},
    { path: 'radar', component:  RadarComponent},
    { path: 'anillo', component:  AnilloComponent},
    { path: 'dinamico', component:  DinamicoComponent},
    { path: 'dispersion', component:  DispersionComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'areapolar' },
];