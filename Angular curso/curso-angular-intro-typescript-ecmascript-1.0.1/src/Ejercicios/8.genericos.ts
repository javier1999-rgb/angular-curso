
/* los genericos retornan cualquier tipo de dato*/
function genericos <T>(argumento:T){
    return argumento;
}

let letras = genericos("hola mundo");
let numero =genericos(122);
let aa=genericos(false);

let aaaa=genericos<number>(100);
