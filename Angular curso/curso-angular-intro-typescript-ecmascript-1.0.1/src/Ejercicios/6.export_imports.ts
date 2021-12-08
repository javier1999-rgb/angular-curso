import { calcularISV, Producto } from "./5.Desestructuracion_avanzada";

/* toco exportar la interface producto  */
const carritoCompras:Producto[] =[
    {
        nombre:"celular 1",
        precio:200
    },
    {
        nombre:"celular 2",
        precio:300
    }
];
/* se exporto la funcion */
const[totall,isv] = calcularISV(carritoCompras);

console.log(totall);
console.log(isv);