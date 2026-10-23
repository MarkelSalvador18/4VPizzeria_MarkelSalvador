import { Component, computed, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  buscarIngrediente = signal("");
  pizzas = input<any[]>([]);

  pizzasFiltradas = computed(() => {
    const texto = this.buscarIngrediente().toLocaleLowerCase().trim();

    if (!texto) 
      return this.pizzas();
    else
    return this.pizzas().filter(pizza =>
      pizza.ingredientes.some((ing: string) => ing.toLowerCase().includes(texto))
    )
  })

}
