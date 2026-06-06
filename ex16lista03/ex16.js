
let idade = prompt("Digite sua idade:");


let regiao = prompt("Digite a região (brasil ou eua):");


idade = Number(idade);


regiao = regiao.toLowerCase();


if (regiao === "brasil") {
    if (idade >= 18) {
        alert("Você é maior de idade no Brasil ");
    } else {
        alert("Você é menor de idade no Brasil ");
    }
} else if (regiao === "eua") {
    if (idade >= 21) {
        alert("Você é maior de idade nos EUA ");
    } else {
        alert("Você é menor de idade nos EUA ");
    }
} else {
    alert("Região inválida ");
}