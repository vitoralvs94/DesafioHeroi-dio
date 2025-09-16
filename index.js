// Desafio classificao do Heroi
// Variaveis

let nomeHeroi = "Goku";
let expHeroi = 8541;    // Trocar valor para testes
let nivelHeroi = "";

// Estrutura de decisao IF

if (expHeroi <= 1000) {
    nivelHeroi = "Ferro";
}else if (expHeroi >= 1001 && expHeroi <= 2000) {
    nivelHeroi = "Bronze";
}else if (expHeroi >= 2001 && expHeroi <= 5000) {
    nivelHeroi = "Prata";
}else if (expHeroi >= 5001 && expHeroi <= 7000) {
    nivelHeroi = "Ouro";
}else if (expHeroi >= 7001 && expHeroi <= 8000) {
    nivelHeroi = "Platina";
}else if (expHeroi >= 8001 && expHeroi <= 9000) {
    nivelHeroi = "Ascendente";
}else if (expHeroi >= 9001 && expHeroi <= 10000) {
    nivelHeroi = "irmotal";
}else if (expHeroi >= 10001) {
    nivelHeroi = "Radiante";
} 
// Saida Final
console.log("O Herói de nome " + nomeHeroi + " está no nível de "  + nivelHeroi + ".");