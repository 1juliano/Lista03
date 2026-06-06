
let nome = prompt("Digite um nome:");


nome = nome.trim();


if (nome.length > 5) {
    alert("Nome longo  (" + nome.length + " caracteres)");
} else {
    alert("Nome curto  (" + nome.length + " caracteres)");
}