const num1 = Number(prompt("Ingrese un número:"))
const num2 = Number(prompt("Ingrese otro número:"))
function calculaMinimo(num1, num2){
    if (num1 < num2){
        return num1
    } else if (num1 > num2) {
        return num2
    } else {
        console.log ("son iguales")
    }
}

console.log (calculaMinimo (num1, num2))
