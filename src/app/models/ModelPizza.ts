export class ModelPizza {

    nombre: string;
    imagen: string;
    precio: number;
    ingredientes: string;

    constructor(nombre: string, imagen: string, precio: number, ingredientes: string) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.ingredientes = ingredientes;
    }


}