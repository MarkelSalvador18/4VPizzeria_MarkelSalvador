import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  // tipoDePago = signal<string>("");
  // public seleccionarMetodoDePago(tipoDePago: string) {
  //   this.tipoDePago.set(tipoDePago);
  // }
  agrupar = new FormGroup({
    direccion: new FormControl('',[Validators.required]),
    hora: new FormControl(''),
    fecha: new FormControl(''),
    bizumNumeroTel: new FormControl(''),
    numeroTarjeta: new FormControl(''),
    ccvNum: new FormControl(''),
    tipoDePago: new FormControl('')
  });

  
  



}
