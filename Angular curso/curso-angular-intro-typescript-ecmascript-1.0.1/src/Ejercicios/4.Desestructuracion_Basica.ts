
/* DESESTRUCTURACION DE OBJECTOS */

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalle:Detalles;
}
interface Detalles {
    Autor:string;
    ano:number;
}

const reproductor1 : Reproductor ={
volumen:10,
segundo:20,
cancion:"Esclava",
detalle:{
    Autor:"Brayn Myyer",
    ano:2021,
},
}
/* Retructuracion con el fin de no escribir tanto al imprimir se hace mediante llaves
no importa el orden*/
const {cancion , segundo,detalle,volumen} =reproductor1;
const {Autor,ano} =detalle;

/* imprimiendo */
console.log(cancion);
console.log(segundo);
console.log(Autor);

/* DESESTRUCTURACION DE ARREGLOS */
const Personajes: string[] = ['goku','vegeta','kirllin'];
/* depende del orden ya que es un arreglo que tiene posiciones */
const [a,b,c] = Personajes;

console.log(a);
console.log(b);
console.log(c);

