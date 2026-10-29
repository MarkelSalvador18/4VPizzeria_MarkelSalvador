import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ModelPizza } from './models/ModelPizza';
import { CardPizza } from './card-pizza/card-pizza';
import { Formulario } from './formulario/formulario';
import { Navbar } from './navbar/navbar';

@Component({
  imports: [RouterOutlet, Header, CardPizza, Formulario, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  cantidadRecibida: number = 0;
recibirCantidad($event: number) {
  this.cantidadRecibida = $event;
}

  public filtrar(txt: string) {
    this.pizzasEncotradas = [];
    for (let pizz of this.pizzas) {
      if (pizz.ingredientes.toLowerCase().includes(txt.toLowerCase())) {
        this.pizzasEncotradas.push(pizz);
      }
    }
  }

  pizzas: ModelPizza[] = [
    {
      nombre: "Margarita",
      imagen: "https://tse4.mm.bing.net/th/id/OIP.3k5lpc7uGCprUQSyLr9segHaE7?pid=Api",
      precio: 10,
      ingredientes: "Tomate, mozzarella y albahaca",
      cantidad: 0
    },
    {
      nombre: "Barbacoa",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.v7OHOQi5j81B3U47d-rYPwHaEK?pid=Api",
      precio: 12,
      ingredientes: "Tomate, mozzarella, bacon y salsa barbacoa",
      cantidad: 0
    },
    {
      nombre: "Barbacoa Extra",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.jrFRkTtQrMuVjJBSQkNZxwHaE8?pid=Api",
      precio: 12,
      ingredientes: "Tomate, mozzarella, bacon, cebolla y salsa barbacoa",
      cantidad: 0
    },
    {
      nombre: "Pepperoni",
      imagen: "https://tse1.mm.bing.net/th/id/OIP.K4rzg3rTYg4Hk6ZBX_Fs9gHaE8?pid=Api",
      precio: 15,
      ingredientes: "Tomate, mozzarella y pepperoni",
      cantidad: 0
    },
    {
      nombre: "Cuatro Estaciones",
      imagen: "https://tse4.mm.bing.net/th/id/OIP.Naz4fhktuiO2gy7GXFItEgHaE7?pid=Api",
      precio: 14,
      ingredientes: "Tomate, mozzarella, champiñones, jamón, alcachofa y aceitunas",
      cantidad: 0
    },
    {
      nombre: "Carbonara",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.5t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 13,
      ingredientes: "Crema, mozzarella, bacon y cebolla",
      cantidad: 0
    },
    {
      nombre: "Hawaiana",
      imagen: "https://tse1.mm.bing.net/th/id/OIP.5e5pTtY0tVYp7v0xFJvWQHaE8?pid=Api",
      precio: 11,
      ingredientes: "Tomate, mozzarella, jamón y piña",
      cantidad: 0
    },
    {
      nombre: "Mexicana",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.N2oLNfaaof5CtCHP0uSm_gHaE8%3Fpid%3DApi&f=1&ipt=b867b0593067f604009370b03432ee4a86ead8ff9809b98aebfc6c2fbb40b60a&ipo=images",
      precio: 14,
      ingredientes: "Tomate, mozzarella, carne picante, jalapeños y cebolla",
      cantidad: 0
    },
    {
      nombre: "Cuatro Quesos",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.7t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 13,
      ingredientes: "Mozzarella, gorgonzola, parmesano y queso de cabra",
      cantidad: 0
    },
    {
      nombre: "Vegetal",
      imagen: "https://tse1.mm.bing.net/th/id/OIP.8t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 12,
      ingredientes: "Tomate, mozzarella, pimiento, cebolla, champiñones y aceitunas",
      cantidad: 0
    },
    {
      nombre: "Prosciutto",
      imagen: "https://tse4.mm.bing.net/th/id/OIP.9t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 13,
      ingredientes: "Tomate, mozzarella y jamón dulce",
      cantidad: 0
    },
    {
      nombre: "Marinara",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.1t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 9,
      ingredientes: "Tomate, ajo, orégano y aceite de oliva",
      cantidad: 0
    },
    {
      nombre: "Pollo BBQ",
      imagen: "https://tse2.mm.bing.net/th/id/OIP.2t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 14,
      ingredientes: "Mozzarella, pollo, salsa barbacoa y cebolla",
      cantidad: 0
    },
    {
      nombre: "Trufa Negra",
      imagen: "https://tse4.mm.bing.net/th/id/OIP.3t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 18,
      ingredientes: "Mozzarella, crema, champiñones y aceite de trufa",
      cantidad: 0
    },
    {
      nombre: "Mediterránea",
      imagen: "https://tse1.mm.bing.net/th/id/OIP.4t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 13,
      ingredientes: "Tomate, mozzarella, aceitunas, tomate cherry y rúcula",
      cantidad: 0
    },
    {
      nombre: "Diavola",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.5t8p9e3uYtY8qJv0xFJvWQHaE8?pid=Api",
      precio: 14,
      ingredientes: "Tomate, mozzarella, salami picante y chile",
      cantidad: 0
    }
  ]
  pizzasEncotradas: ModelPizza[] = this.pizzas;

}


