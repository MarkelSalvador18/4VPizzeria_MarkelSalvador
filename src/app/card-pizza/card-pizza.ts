import { Component, EventEmitter, ModelFunction, Output, input, output } from '@angular/core';
import { ModelPizza } from '../models/ModelPizza';


@Component({
  imports: [],
  selector: 'app-card-pizza',
  styleUrl: './card-pizza.css',
  templateUrl: './card-pizza.html',
})
export class CardPizza {


  pizza = input.required<ModelPizza>();
  pizzaAniadida = output<{pizza: ModelPizza, cantidad: number}>();
  cantidadPizzasNumero: number = 1;
  public onCantidadChange(valor: string) {
    const numero = Number(valor);
    if (!isNaN(numero)) {
      this.cantidadPizzasNumero = numero;
    } else {
      this.cantidadPizzasNumero = 0;
    }
  }
  onCarritoClick(){
    this.pizzaAniadida.emit({pizza: this.pizza(), 
      cantidad: this.cantidadPizzasNumero});
  }

}
