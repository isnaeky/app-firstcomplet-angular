import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from './components/body/body.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { UsuarioComponent } from './components/usuario/usuario.component';/* 
import { EditarComponent } from './components/usuario/editar/editar.component';
import { DetalleComponent } from './components/usuario/detalle/detalle.component';
import { NuevoComponent } from './components/usuario/nuevo/nuevo.component'; */

import { APP_USUARIO } from './components/usuario/usuario.routes';
import { APP_GRAFICAS } from './components/graficas/graficas.routes';
import { GraficasComponent } from './components/graficas/graficas.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: BuscarComponent },
    { path: 'buscar/:id', component: SearchComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'virtual', component: VirtualScrollComponent },
    { path: 'dragdrop', component: DragdropComponent },
    { path: 'pageshp/:id', component: UsuarioComponent, children:
        APP_USUARIO
    },
    { path: 'graficas', component: GraficasComponent, children:
    APP_GRAFICAS
},
    { path: '**', pathMatch: 'full', redirectTo: '/home' },
    

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
