import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  tipoDePago = signal<string>("");
  public seleccionarMetodoDePago(tipoDePago: string) {
    this.tipoDePago.set(tipoDePago);
  }
}
