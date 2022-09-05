function sumar(numero1, numero2){
    return numero1 + numero2
}
function restar(numero1, numero2){
    return numero1 - numero2
}
const numero1= 5;
const numero2= 5;
const operador = '-';
let resultado;
if (operador === '+'){
    resultado = sumar (numero1, numero2);
} else  {
    resultado = restar (numero1, numero2)
} 

console.log ('El resultado es ' + resultado)