/* ejercicio de interfaces  */
 
/* Primera interface */
interface superHeroe {
    nombre : string;
    Edad: number;
    mostrar():String;
    Direccion : DireccionAnidada;
    
    }
    /* interface anidada para dirreccion */
    interface DireccionAnidada {
        calle:String;
        ciudad:String;
        pais:String; 
    }
    /* el objectio creado */
    const SuperHeroe :superHeroe = {
    nombre:"Spiderman",
    Edad: 25,
    Direccion: {
        calle:"Main st",
        pais:"USA",
        ciudad:"NY",
    },
    mostrar(){
     return  " Soy " + this.nombre + " y vivo en  " + this.Direccion.ciudad + " , " + this.Direccion.pais;
    },
    }
    
    const Villano : superHeroe={
        nombre : "Batman",
        Edad:23,
        Direccion:{
            calle :"Calle 10",
            ciudad : "Vegas",
            pais : "USA"
        },
        mostrar(){
        return " Soy " + this.nombre + " y vivo en  " + this.Direccion.ciudad + " , " + this.Direccion.pais;
        }
    }
    
    /* PARA MOSTRAR */ 
    const descripcion = SuperHeroe.mostrar();
    console.log(descripcion);
    
    const descripcion2=Villano.mostrar();
    console.log(descripcion2);
    
    
    /* saca el mayor entre los dos super heroes por la edad */
    if (SuperHeroe.Edad > Villano.Edad){
        console.log(" El mayor Tiene "+ SuperHeroe.Edad + " y se llama " + SuperHeroe.nombre);
    }
    else{
        console.log(" El mayor Tiene "+ Villano.Edad + " y se llama " + Villano.nombre);
    }