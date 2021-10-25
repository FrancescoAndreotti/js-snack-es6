const listaBici = [
    { name: "Trek", peso: 9.3 },
    { name: "Specialized", peso: 9 },
    { name: "Focus", peso: 10 },
    { name: "Ktm", peso: 9.6 }
];
let biciLeggera = listaBici[0];


lightBike();
stampaAVideo();






function lightBike() {
    for (let i = 0; i < listaBici.length; i++) {
        if (biciLeggera.peso > listaBici[i].peso) {
            biciLeggera = listaBici[i];
        }
    }
    console.log(biciLeggera);
}


function stampaAVideo() {
    const { name, peso } = biciLeggera;
    const bikeContainer = document.querySelector(".bike-container");
    bikeContainer.innerHTML = `<h1>La bici più leggera in commercio!</h1>
                               <p>Nome: ${name}</p>
                               <p>Peso: ${peso}</p>`;
}