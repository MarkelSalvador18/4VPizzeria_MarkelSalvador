export class ModelPizza {

    nombre: string;
    imagen: string;
    precio: number;
    ingredientes: string;
    cantidad: number;

    constructor(nombre: string, imagen: string, precio: number, ingredientes: string, cantidad: number) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.cantidad = cantidad;
    }


}