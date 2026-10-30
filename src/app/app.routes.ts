import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { InfoPizzas } from './info-pizzas/info-pizzas';

export const routes: Routes = [
    { path: '', component: InfoPizzas },
    { path: 'listadoPizzas', component: InfoPizzas },
    { path: 'formulario', component: Formulario }

];
