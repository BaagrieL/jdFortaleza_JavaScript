/* Entre com um numero de 1 a 7 sendo que cada numero representa um dia da semana, caso seja digitado algo diferente mostre uma mensagem de erro. */

//variáveis 
let diaDaSemana = parseInt( prompt("Digite um número de 1-7:"));

//saídas 
if (diaDaSemana == 1)
    console.log("domingo");
else if(diaDaSemana == 2)
    console.log("segunda");
else if(diaDaSemana == 3)
    console.log("terça");
else if(diaDaSemana == 4)
    console.log("quarta");
else if(diaDaSemana == 5)
    console.log("quinta");
else if(diaDaSemana == 6)
    console.log("sexta");
else if(diaDaSemana == 7)
    console.log("sábado");
else
    console.log("valor inválido")