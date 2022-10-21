//Variáveis
let tamanhoArquivo = parseFloat( prompt("Qual o tamanho do arquivo(em MB):"));
let velocidadeNet = parseFloat( prompt("Qual a velocidade da sua internet(em Mbps):"));
let downloadTime = parseFloat(tamanhoArquivo/(velocidadeNet/8));

//Saída
console.log("O tempo extimado de download é de " + downloadTime + " segundos")
