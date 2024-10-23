const readlineSync = require('readline-sync');

function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };
}

let jogadores = [];

for (let i = 1; i <= 5; i++) {
  let vitorias = parseInt(readlineSync.question(`Jogador ${i}: Informe o número de vitórias: `));
  let derrotas = parseInt(readlineSync.question(`Jogador ${i}: Informe o número de derrotas: `));

  jogadores.push({ vitorias: vitorias, derrotas: derrotas });
}

for (let i = 0; i < jogadores.length; i++) {
  let jogador = jogadores[i];
  let resultado = calcularNivel(jogador.vitorias, jogador.derrotas);

  console.log(`Jogador ${i + 1}: O Herói tem saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}.`);
}

