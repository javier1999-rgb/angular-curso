interface Pasajeros{
    nombre:string;
    hijos?:string[];
}

const Pasajero1 :Pasajeros ={
      nombre :"Javier",
      hijos:["Daniel","Damma"],
}

const Pasajero2 : Pasajeros ={
    nombre:"Juan",
}

function MostrarHijos(pasajero:Pasajeros){

    const cantidadhijos = pasajero.hijos?.length || 0;

    
      console.log(cantidadhijos )
}

MostrarHijos(Pasajero1);
MostrarHijos(Pasajero2);