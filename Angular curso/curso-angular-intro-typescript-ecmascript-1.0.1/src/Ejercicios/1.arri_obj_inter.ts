
/*Creacion de un array lleno exclusivamente de strings */
let hablidades : string[] =["volar","saltar","correr"];


/*las interfaces sirven para poner que tipo son las variabales de un objecto */
interface Persona{
    nombre:string;
    hp:number;
    habilidades:string[];
    pueblo?:string;
}
/* creaacion de un objecto */
const persona :Persona={
     nombre : "javier",
     hp : 121,
     habilidades:["correr","salatar"]
}

persona.pueblo="sangil";
console.table(persona)


