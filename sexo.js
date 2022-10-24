// Q4. Verifique se uma letra informada é F ou M 

let n1 = prompt("Digite seu sexo(F/M)?");
let result = n1.toUpperCase();


if (result == "M")
    console.log("M-masculino");
else if (result == "F")
    console.log("F-feminino");
else
    console.log("Sexo invalido");

