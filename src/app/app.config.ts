import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { CardPizza } from './card-pizza/card-pizza';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    { path: '', component: CardPizza },
    { path: 'listaDePizzas', component: CardPizza },
    { path: 'formulario', component: Formulario },
];
