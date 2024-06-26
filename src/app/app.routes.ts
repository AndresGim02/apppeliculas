import { Routes } from '@angular/router';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';


export const routes: Routes = [
    {path: 'search', component: PeliculasComponent},
    {path: 'detail/:id', component: DetallesComponent},
    {path: '', pathMatch: 'full', redirectTo: 'search'},
    {path: '**', pathMatch: 'full', redirectTo: 'search'}

];
