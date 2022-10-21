//Variáveis
let ganhoPorHora = parseFloat( prompt("Digite quanto você ganha por hora:"));
let horasTrabalhadas = parseFloat( prompt("Digite quantas horas você trabalhou esse mês:"));
let salário = parseFloat(ganhoPorHora*horasTrabalhadas);
//saída 
console.log("Seu salário esse mês foi de " + salário + " reais");