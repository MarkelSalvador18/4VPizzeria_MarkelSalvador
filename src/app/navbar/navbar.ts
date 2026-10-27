import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  buscarIngrediente = "";
  
  busqueda = output<string>();
  public botonBuscarIngrediente() {
    this.busqueda.emit(this.buscarIngrediente);
  }

}
