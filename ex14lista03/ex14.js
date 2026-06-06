
let temp = prompt("Digite a temperatura em °C:");


temp = Number(temp);


if (temp < 15) {
    alert("Clima frio ");
} else if (temp >= 15 && temp <= 25) {
    alert("Clima agradável ");
} else {
    alert("Clima quente ");
}