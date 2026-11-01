import { Component, OutputRefSubscription, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Formulario } from './formulario/formulario';
import { Navbar } from './navbar/navbar';
import { CardPizza } from './card-pizza/card-pizza';
import { InfoPizzas } from './info-pizzas/info-pizzas';
import { ModelPizza } from './models/ModelPizza';
import { Pedido } from './pedido/pedido';
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet, Header, Navbar, CardPizza, InfoPizzas, Pedido, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  constructor(private router: Router) {}

  public filtrar(txt: string) {
    this.router.navigate(['/listadoPizzas'], {
      queryParams: {
        buscar: txt
      }
    });
  }
  pedido = signal<{ pizza: ModelPizza, cantidad: number }[]>([]);

  onPizzAniadida(event: { pizza: ModelPizza, cantidad: number }) {
    const lista = this.pedido();
    const existe = lista.find(item => item.pizza.nombre === event.pizza.nombre);

    if (existe) {
      existe.cantidad = existe.cantidad + event.cantidad;
      this.pedido.set([...lista]);
    } else {
      this.pedido.set([...lista, { pizza: event.pizza, cantidad: event.cantidad }]);
    }
  }
  public vaciarPedido() {
    this.pedido.set([]);
  }
  suscripcion?: OutputRefSubscription;

  componenteActivado(componente: unknown) {

    this.suscripcion?.unsubscribe();

    if (componente instanceof InfoPizzas) {
      this.suscripcion = componente.pizzaAniadida.subscribe(texto => {
        this.onPizzAniadida(texto);
      });
    }
    

  }
}
