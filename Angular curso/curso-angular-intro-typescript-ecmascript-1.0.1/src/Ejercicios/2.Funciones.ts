
/* funciones */


/* Una funcion argumentos tipo number que retorna un number */
function sumar(a:number,b:number):number{
    return a+b;
 }
 /* esta funcion no tiene tipos de variables  */
 function pegar(a,b){
     return a+b
 }
 
 /* funcion tipo flecha*/
 const SumarFlecha = (a:number,b:number):number =>{
     return a+b;
 }
 
 /* Primero los argumentos obligatorios ---- 
 Segundo los argumentos que no son obligatorios
 Tercero los argumentos que se les asigna un valor
 */
 function multiplicacion(numero:number,otro? :number,base:number = 2):number{
     return numero*base;
 }
 /*Probando las funciones  */
 const Probando1 = sumar(10,21);
 const Probando2 = SumarFlecha(12,20);
 const Probando3 = multiplicacion(10,2,10);
 const Probando4 = pegar("hola","javier");
 const Probando5 = pegar(20,7);
 const Probando6 = pegar(true, false)
 
 /* Imprimiendo las funciones */
 console.log(Probando1);
 console.log(Probando2);
 console.log(Probando3);
 console.log(Probando4);
 console.log(Probando5);
 console.log(Probando6);


 /* segunda clase de funciones */

 // * interface del personaje con el metodo */
 interface PersonajeR {
     nombre:string;
     vida:number;
     MostrarVida:() => void; /* Cuando ponemos void es que retorna cualquier cosa */
 }


 /*  la funcion que sirve para curar no retorna nada entonces ponemos void*/
 function curar(personaje :PersonajeR,curarX:number):void {
     personaje.vida=personaje.vida+curarX;
 }

/*Creacion del objecto tipo PersonajeR con un metodo   */
 const Javier : PersonajeR ={
     nombre : "Javier Carvajal",
     vida : 25,
     MostrarVida(){
         console.log( "soy ",this.nombre,"la vida que tiene es",this.vida);
     }
 }
 /*  se indica el personaje que se va curar y cuanto*/
 curar(Javier,20);
 /* se llama el metodo */
 Javier.MostrarVida();
