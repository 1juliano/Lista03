
let hora = prompt("Digite a hora (0 a 23):");


hora = Number(hora);


if (hora >= 5 && hora <= 11) {
    alert("É manhã ");
} else if (hora >= 12 && hora <= 17) {
    alert("É tarde ");
} else if (hora >= 18 && hora <= 23) {
    alert("É noite ");
} else if (hora >= 0 && hora <= 4) {
    alert("É madrugada ");
} else {
    alert("Hora inválida ");
}