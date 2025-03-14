/**1. Faça um Programa que peça dois números e imprima o maior deles. */

var primeiroValor = parseFloat(prompt("Digite o primeiro valor: "));
var segundoValor = parseFloat(prompt("Digite o segundo valor: "));

if (primeiroValor > segundoValor) {
    alert("1° Valor: " + primeiroValor + " é maior que " + segundoValor);

} else if (primeiroValor < segundoValor) {
    alert("2° Valor: " + segundoValor + " é maior que " + primeiroValor);

} else {
    alert("1° e o 2° segundo valor são iguais: " + primeiroValor);
}
