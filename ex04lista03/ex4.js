
let idade1 = prompt("Digite a idade da primeira pessoa:");
let idade2 = prompt("Digite a idade da segunda pessoa:");


idade1 = Number(idade1);
idade2 = Number(idade2);


if (idade1 > idade2) {
    alert("A primeira pessoa é mais velha ");
} else if (idade2 > idade1) {
    alert("A segunda pessoa é mais velha ");
} else {
    alert("As duas pessoas têm a mesma idade ");
}