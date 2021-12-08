
 export interface Producto{
    nombre:string;
    precio: number;
}

 const Celular:Producto ={
     nombre : "Nokia",
     precio: 200
 }

 const Tablet : Producto = {
     nombre :"IpAD",
     precio: 400
 }
/*Creo una funcion la cual recibe unos productos tipo productos
retorna dos parametros tipo number en un arreglo
*/
  export function calcularISV(productos:Producto[]):[number,number]{

    let total =0;
/*Para cada Producto se va recorrer en su variable precio */
    productos.forEach(({precio})=>{
        total +=precio;
    })

    return [total , total * 0.15]
 }
/* Se crea un arreglo con los dos objectos */
 const articulos = [Celular,Tablet];

 /* se le aplica el metodo a los productos del arreglo */
 const [total, isv] =calcularISV(articulos);

 console.log(total);
 console.log(isv);