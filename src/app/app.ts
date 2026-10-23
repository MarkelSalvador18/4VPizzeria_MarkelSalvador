import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ModelPizza } from './models/ModelPizza';
import { CardPizza } from './card-pizza/card-pizza';
import { Formulario } from './formulario/formulario';

@Component({
  imports: [RouterOutlet, Header, CardPizza, Formulario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('4VPizzas');

  pizzas: ModelPizza[] = [
    {
    nombre: "Margarita",
    imagen: "https://tse4.mm.bing.net/th/id/OIP.3k5lpc7uGCprUQSyLr9segHaE7?pid=Api",
    precio: 10,
    ingredientes: "Tomate, mozzarella y albahaca"
  },
  {
    nombre: "Barbacoa",
    imagen: "https://tse3.mm.bing.net/th/id/OIP.v7OHOQi5j81B3U47d-rYPwHaEK?pid=Api",
    precio: 12,
    ingredientes: "Tomate, mozzarella, bacon y salsa barbacoa"
  },
  {
    nombre: "Barbacoa Extra",
    imagen: "https://tse3.mm.bing.net/th/id/OIP.jrFRkTtQrMuVjJBSQkNZxwHaE8?pid=Api",
    precio: 12,
    ingredientes: "Tomate, mozzarella, bacon, cebolla y salsa barbacoa"
  },
  {
    nombre: "Pepperoni",
    imagen: "https://tse1.mm.bing.net/th/id/OIP.K4rzg3rTYg4Hk6ZBX_Fs9gHaE8?pid=Api",
    precio: 15,
    ingredientes: "Tomate, mozzarella y pepperoni"
  },
  {
    nombre: "Cuatro Estaciones",
    imagen: "https://tse4.mm.bing.net/th/id/OIP.Naz4fhktuiO2gy7GXFItEgHaE7?pid=Api",
    precio: 14,
    ingredientes: "Tomate, mozzarella, champiñones, jamón, alcachofa y aceitunas"
  },
  {
    nombre: "Carbonara",
    imagen: "https://tse3.mm.bing.net/th/id/OIP.5t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 13,
    ingredientes: "Crema, mozzarella, bacon y cebolla"
  },
  {
    nombre: "Hawaiana",
    imagen: "https://tse1.mm.bing.net/th/id/OIP.5e5pTtY0tVYp7v0xFJvWQHaE8?pid=Api",
    precio: 11,
    ingredientes: "Tomate, mozzarella, jamón y piña"
  },
  {
    nombre: "Mexicana",
    imagen: "https://tse2.mm.bing.net/th/id/OIP.4g8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 14,
    ingredientes: "Tomate, mozzarella, carne picante, jalapeños y cebolla"
  },
  {
    nombre: "Cuatro Quesos",
    imagen: "https://tse3.mm.bing.net/th/id/OIP.7t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 13,
    ingredientes: "Mozzarella, gorgonzola, parmesano y queso de cabra"
  },
  {
    nombre: "Vegetal",
    imagen: "https://tse1.mm.bing.net/th/id/OIP.8t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 12,
    ingredientes: "Tomate, mozzarella, pimiento, cebolla, champiñones y aceitunas"
  },
  {
    nombre: "Prosciutto",
    imagen: "https://tse4.mm.bing.net/th/id/OIP.9t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 13,
    ingredientes: "Tomate, mozzarella y jamón dulce"
  },
  {
    nombre: "Marinara",
    imagen: "https://tse3.mm.bing.net/th/id/OIP.1t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 9,
    ingredientes: "Tomate, ajo, orégano y aceite de oliva"
  },
  {
    nombre: "Pollo BBQ",
    imagen: "https://tse2.mm.bing.net/th/id/OIP.2t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 14,
    ingredientes: "Mozzarella, pollo, salsa barbacoa y cebolla"
  },
  {
    nombre: "Trufa Negra",
    imagen: "https://tse4.mm.bing.net/th/id/OIP.3t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 18,
    ingredientes: "Mozzarella, crema, champiñones y aceite de trufa"
  },
  {
    nombre: "Mediterránea",
    imagen: "https://tse1.mm.bing.net/th/id/OIP.4t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 13,
    ingredientes: "Tomate, mozzarella, aceitunas, tomate cherry y rúcula"
  },
  {
    nombre: "Diavola",
    imagen: "https://tse3.mm.bing.net/th/id/OIP.5t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
    precio: 14,
    ingredientes: "Tomate, mozzarella, salami picante y chile"
  }
  ];
}


