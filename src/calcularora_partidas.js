const prompt = require("prompt-sync")();

console.log ("Bem vinde! Ao CarolVerso");
let heroi_Nome = prompt("Qual é o nome do seu herói?");
let quantVitórias = Number(prompt("Qual é a quantidade de vitóriasdo seu herói? " + "(Digite um número inteiro)"));
let quantDerrotas = Number(prompt("Qual é a quantidade de derrotas do seu herói? " + "(Digite um número inteiro)"));

function calcularPartidas(quantVitórias, quantDerrotas) {
    const saldoVitórias = quantVitórias - quantDerrotas;
    let nivel;

    if (saldoVitórias < 10) {
        nivel = "Ferro";
    } else if (saldoVitórias >= 10 && saldoVitórias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitórias > 20 && saldoVitórias <= 50) {
        nivel = "Prata";
    } else if (saldoVitórias > 50 && saldoVitórias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitórias > 80 && saldoVitórias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitórias > 90 && saldoVitórias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitórias, nivel };
}
const { saldoVitórias, nivel } = calcularPartidas(quantVitórias, quantDerrotas);
console.log(`O Herói ' ${heroi_Nome} ' tem de saldo de ${saldoVitórias} e está no nível de ${nivel}`);