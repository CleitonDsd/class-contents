/** exe 02
 * . Faça um Programa que peça um valor e mostre na tela se o valor é
positivo ou negativo

 * **/
var numeroDigitado = parseInt(prompt("Digite um número: "));

if (numeroDigitado < 0)
    alert("número informado " + numeroDigitado +  " é negativo");
else
    alert("número informado " + numeroDigitado +  " é positivo");
