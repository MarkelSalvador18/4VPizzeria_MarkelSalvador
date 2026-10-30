import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Formulario } from './formulario/formulario';
import { Navbar } from './navbar/navbar';
import { CardPizza } from './card-pizza/card-pizza';
import { InfoPizzas } from './info-pizzas/info-pizzas';
import { ModelPizza } from './models/ModelPizza';

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
  pedido: {pizza: ModelPizza, cantidad: number}[] = [];
  onPizzAniadida(event: {pizza: ModelPizza, cantidad: number}) {
    let existe = this.pedido.find(item =>
      item.pizza.nombre === event.pizza.nombre
    );
    if (existe){
      existe.cantidad = existe.cantidad + event.cantidad;
    } else {
      this.pedido.push({pizza: event.pizza, cantidad: event.cantidad});
    }

  }

}

  




