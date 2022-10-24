/* Q8. Receber 2 notas, mostrar a média, retornar "aprovado" para média igual ou maior a 7; "reprovado" para média menor que 7  e "aprovado com distinção" para média igual a 10
 */
 
//variáveis 
let n1 = Number( prompt("Digite um número"));
let n2 = Number( prompt("Digite outro número"));
let media = (n1 + n2)/2;

//saídas 
console.log("a média é "+ media);
if (media == 10)
    console.log("Aprovado com distinção");
else if (media >= 7)
    console.log("Aprovado");
else 
    console.log("Reprovado");
