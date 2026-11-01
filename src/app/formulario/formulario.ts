import { Component, inject, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pedido } from '../pedido/pedido';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
  private router = inject(Router);
 
  //ESTO ES PARA MI, PARA ESTUDIARLO
  // tipoDePago = signal<string>("");
  // public seleccionarMetodoDePago(tipoDePago: string) {
  //   this.tipoDePago.set(tipoDePago);
  // }
  agrupar = new FormGroup({
    direccion: new FormControl('',
      [Validators.required]),
    hora: new FormControl('',
      [Validators.required]),
    fecha: new FormControl('',
      [Validators.required]),
    bizumNumeroTel: new FormControl('',
      [Validators.required, 
        Validators.minLength(9),
        Validators.maxLength(9)]),
    numeroTarjeta: new FormControl('',
      [Validators.required, 
        Validators.minLength(16),
        Validators.maxLength(16)]),
    ccvNum: new FormControl('',
      [Validators.required,
        Validators.minLength(3), 
        Validators.maxLength(3)]),
    tipoDePago: new FormControl('')
  });

  ngOnInit() {
    this.agrupar.controls['tipoDePago'].valueChanges.subscribe(valor =>{
      if (valor === 'tarjeta'){
        this.agrupar.controls['numeroTarjeta'].enable();
        this.agrupar.controls['ccvNum'].enable();

        this.agrupar.controls['bizumNumeroTel'].disable();
      } else if (valor === 'bizum'){
        this.agrupar.controls['bizumNumeroTel'].enable();
        this.agrupar.controls['numeroTarjeta'].disable();
        this.agrupar.controls['ccvNum'].disable();
      }
    })
  }
  get mensajeValidadodes() {
    return this.agrupar.controls;
  }  
  public hacerPedido() {
    if (this.agrupar.valid){
      alert("Gracias por su compra!");
      this.router.navigate(['/listadoPizzas'], {
      queryParams: { reload: Date.now() }
    });
    }
  }
  



}
