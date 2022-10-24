// Q7.Peça 3 números e retorne o maior deles

//variáveis 
let n1 = Number( prompt("Digite um número"));
let n2 = Number( prompt("Digite outro número"));
let n3 = Number( prompt("Digite outro número"));

// maior 
if (n1 > n2 && n1 > n3)
  console.log(`O número ${n1} é maior que  ${n2} e que ${n3}`);
else if (n2 > n1 && n2 > n3)
  console.log(`O número ${n2} é maior que ${n1}  e que ${n3}`);
  else if (n3 > n1 && n3 > n2)
  console.log(`O número ${n3} é maior que ${n1} e que ${n2}`);

//menor
if (n1 < n2 && n1 < n3)
  console.log(`O número ${n1} é menor que ${n2} e que ${n3}`);
else if (n2 < n1 &&  n2 < n3)
  console.log(`O número ${n2} é menor que ${n1} e que ${n3}`);
  else if (n3 < n1 && n3 < n2)
  console.log(`O número ${n3} é menor que ${n1} e que ${n2}`);
