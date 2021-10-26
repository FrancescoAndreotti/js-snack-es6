const squadre = [
    { nome: "Inter", punti: 0, falli: 0 },
    { nome: "Salernitana", punti: 0, falli: 0 },
    { nome: "Milan", punti: 0, falli: 0 },
    { nome: "Sassuolo", punti: 0, falli: 0 },
    { nome: "Cagliari", punti: 0, falli: 0 }
];

function randomNum() {
    const num = Math.floor(Math.random() * 100);
    return num;
}

console.log(randomNum());

const listaSquadre = [];

for (let i = 0; i < squadre.length; i++) {
    let team = squadre[i];
    team.falli = randomNum();
    team.punti = randomNum();
    const { nome, falli } = team;

    listaSquadre.push({ nome, falli });
}
console.log(listaSquadre);