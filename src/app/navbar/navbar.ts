import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  imports: [RouterLink, RouterLinkActive],
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
