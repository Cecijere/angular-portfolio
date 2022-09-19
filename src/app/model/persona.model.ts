export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    imgprofile: string;

    constructor(nombre: string, apellido: string, imgprofile: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imgprofile = imgprofile;
    }
}