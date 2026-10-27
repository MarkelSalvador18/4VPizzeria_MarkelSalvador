import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
  direccion = new FormControl("");
  bizumNumeroTel = new FormControl("");
  numeroTarjeta = new FormControl("");
  ccvNum = new FormControl("");


}
