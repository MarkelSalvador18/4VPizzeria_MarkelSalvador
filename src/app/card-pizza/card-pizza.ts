import { Component, EventEmitter, ModelFunction, Output, input } from '@angular/core';
import { ModelPizza } from '../models/ModelPizza';

@Component({
  imports: [],
  selector: 'app-card-pizza',
  styleUrl: './card-pizza.css',
  templateUrl: './card-pizza.html',
})
export class CardPizza {


  pizza = input.required<ModelPizza>();
  

}
