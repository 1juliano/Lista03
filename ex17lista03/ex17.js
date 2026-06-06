
let temp = prompt("Digite a temperatura:");


let unidade = prompt("Digite a unidade (c para Celsius, f para Fahrenheit):");


temp = Number(temp);


unidade = unidade.toLowerCase();


if (unidade === "c") {
    let resultado = (temp * 9/5) + 32;
    alert("Temperatura em Fahrenheit: " + resultado.toFixed(2) + " °F ");
} else if (unidade === "f") {
    let resultado = (temp - 32) * 5/9;
    alert("Temperatura em Celsius: " + resultado.toFixed(2) + " °C ");
} else {
    alert("Unidade inválida ");
}