import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelPizza } from '../models/ModelPizza';
import { CardPizza } from '../card-pizza/card-pizza';
import { single } from 'rxjs';

@Component({
  imports: [CardPizza],
  selector: 'app-info-pizzas',
  styleUrl: './info-pizzas.css',
  templateUrl: './info-pizzas.html',
})
export class InfoPizzas {
  constructor(private router: ActivatedRoute){}

  public filtrar(txt: string) {
  let encontradas: ModelPizza[] = [];
  let termino = txt.toLowerCase();

  for (let pizz of this.pizzas) {
    if (pizz.ingredientes.toLowerCase().includes(termino)) {
      encontradas.push(pizz);
    }
  }

  this.pizzasEncotradas.set(encontradas);
}
 ngOnInit() {
    this.router.queryParamMap.subscribe(params=>{
      let busqueda = params.get('buscar');
      if (busqueda == null){
        busqueda = "";
      }
      this.filtrar(busqueda);
    });
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
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecetinas.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fpizza-carbonara-768x512.jpg&f=1&nofb=1&ipt=43cccd78365a3c6fe2bcc27e48ba2f1ea661240ff57fcc88d4e0b2000a120e46&ipo=images",
      precio: 13,
      ingredientes: "Crema, mozzarella, bacon y cebolla",
      cantidad: 0
    },
    {
      nombre: "Hawaiana",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.JRWRPZiDUYibqxrcGH97kgHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=1cdb7b73f82e089baf5db2d8325eadb2f157f565f22af77780d33ea09d230fad&ipo=images",
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
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ZaPxaCJrRq4E85JmLYzV0gHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=3562141b88db669ccf173cc45552b1e12168e06e566b45e927db27b3250fdec4&ipo=images",
      precio: 13,
      ingredientes: "Mozzarella, gorgonzola, parmesano y queso de cabra",
      cantidad: 0
    },
    {
      nombre: "Vegetal",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.3PCdYSQhBqZYa2GZ0pw4NgHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=1377a719e3222420d8d859f199a45894fc70ccc2afdcf67bed793d0956131caa&ipo=images",
      precio: 12,
      ingredientes: "Tomate, mozzarella, pimiento, cebolla, champiñones y aceitunas",
      cantidad: 0
    },
    {
      nombre: "Prosciutto",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.ORXEbJVbssRedc8pGmvxqAHaE7%3Fr%3D0%26pid%3DApi&f=1&ipt=082c92eefaf3a2e2950c1fa0ddf3075c6b078651b92a844564c8aefcdb2339d2&ipo=images",
      precio: 13,
      ingredientes: "Tomate, mozzarella y jamón dulce",
      cantidad: 0
    },
    {
      nombre: "Marinara",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.e3sqJxr6bTFTeBi5n2nFVAHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=51aeb54266107b72c80c69d937c09a77aac25d407505392606c8dca58cbfa40c&ipo=images",
      precio: 9,
      ingredientes: "Tomate, ajo, orégano y aceite de oliva",
      cantidad: 0
    },
    {
      nombre: "Pollo BBQ",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.86Y-7vPQxOCS0c2jLGJJQAHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=21aaaa4194bee5e4be5d6994ffa38608d3a48b5620653399593031a5fb304283&ipo=images",
      precio: 14,
      ingredientes: "Mozzarella, pollo, salsa barbacoa y cebolla",
      cantidad: 0
    },
    {
      nombre: "Trufa Negra",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.tWE-_GLmHGMV69_6nUZC-QHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=ae2a29c91242457496f76127cb7dfffc82c43879ea7c552abae313a7ddb57ad6&ipo=images",
      precio: 18,
      ingredientes: "Mozzarella, crema, champiñones y aceite de trufa",
      cantidad: 0
    },
    {
      nombre: "Mediterránea",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fosterstatic.reciperm.com%2Fwebp%2F10400.webp&f=1&nofb=1&ipt=a368b8d92e22bae2a167157d228109b3107b3e21303116eb9663e834b7815197&ipo=images",
      precio: 13,
      ingredientes: "Tomate, mozzarella, aceitunas, tomate cherry y rúcula",
      cantidad: 0
    },
    {
      nombre: "Diavola",
      imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.KGOSlHWGMfihw12_LSDQlgHaFc%3Fr%3D0%26pid%3DApi&f=1&ipt=4e35c2878c28a0d2a434bf6cd56a09edf343ec658a20ef826527dcf84f9dbcce&ipo=images",
      precio: 14,
      ingredientes: "Tomate, mozzarella, salami picante y chile",
      cantidad: 0
    }
  ]
  pizzasEncotradas = signal<ModelPizza[]>(this.pizzas);
}
