import { Routes } from '@angular/router';

import { EditarComponent } from './editar/editar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NuevoComponent } from './nuevo/nuevo.component';

export const APP_USUARIO: Routes = [
    { path: 'editar', component: EditarComponent},
    { path: 'nuevo', component:  NuevoComponent},
    { path: 'detalles', component:  DetalleComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];