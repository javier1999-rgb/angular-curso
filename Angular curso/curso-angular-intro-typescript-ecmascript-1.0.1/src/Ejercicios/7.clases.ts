
class PersonaNormal{
    constructor(
    public nombre:string,
    public direccion:string,
    ){}
}

// Herencia
class Heroe extends PersonaNormal{
   // private alterEgo:string;/*solo va hacer visible en esta clase*/
   // public edad:number;/* fuera de la clase alguien puede ver esta propiedad*/
   // static nombreReal:number;/*se va poder acceder al valor de la propiedad */


   /* esto de arriba tambien lo podemos definir de esta manera y es mas recomendabñe */
    constructor(
            public alterEgo:string,
            public edad:number,
            public nombreReal:string,
    ){
        super(nombreReal,"calle 20 con 15");
    }
    
}

/*Creacion de instancia solo con clases
en las clases se puede poner metodos en las 
interfaces no */

const iroman =new Heroe("hola",23,"luis");
console.log(iroman);