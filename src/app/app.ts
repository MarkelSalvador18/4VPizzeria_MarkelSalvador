import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Formulario } from './formulario/formulario';
import { Navbar } from './navbar/navbar';
import { CardPizza } from './card-pizza/card-pizza';
import { InfoPizzas } from './info-pizzas/info-pizzas';

@Component({
  imports: [RouterOutlet, Header, Formulario, Navbar, CardPizza, InfoPizzas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 
  constructor(private router: Router){}

  public filtrar(txt: string){
    this.router.navigate(['/listadoPizzas'], {queryParams: {
      buscar: txt
    }});
  }

}

  




