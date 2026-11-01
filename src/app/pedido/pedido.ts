import { Component, input} from '@angular/core';
import { ModelPizza } from '../models/ModelPizza';

@Component({
  imports: [],
  selector: 'app-pedido',
  styleUrl: './pedido.css',
  templateUrl: './pedido.html',
})
export class Pedido {

  pedido = input<{pizza: ModelPizza, cantidad: number}[]>([]);

  get total(): number {
    let suma = 0;
    for (let item of this.pedido()) {
      suma = suma + item.pizza.precio * item.cantidad;
    }
    return suma;
  }

}
