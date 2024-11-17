function genererNumeroAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// EUROMILLION Fonction qui permet de tirer 5 numéros de 1 à 49 et 2 étoiles de 1 à 12 au hazard
function euroMillions() {
    const numeros = new Set();
    const etoiles = new Set();

    while (numeros.size < 5) {
        numeros.add(genererNumeroAleatoire(1, 50));
    }
    while (etoiles.size < 2) {
        etoiles.add(genererNumeroAleatoire(1, 12));
    }
    const numerosArray = Array.from(numeros);
    const etoilesArray = Array.from(etoiles);

    return {
        numeros: numerosArray,
        etoiles: etoilesArray
    }
}
const tirageEuromillions = euroMillions();
console.log("Numéros principaux : ", tirageEuromillions.numeros);
console.log("les 2 étoiles : ", tirageEuromillions.etoiles);
// Fonction qui permet de tirer 5 numéros de 1 à 49 et 2 étoiles de 1 à 12 au hazard
///////////////////////////////////////////////////////////////



// LOTO Fonction qui permet de tirer 5 numéros de 1 à 49 et 1 numéro de 1 à 10 au hazard

function lotto() {
    const numeros = new Set();
    const chance = genererNumeroAleatoire(1, 10);

    while (numeros.size < 5) {
        numeros.add(genererNumeroAleatoire(1, 49));
    }

    const numerosArray = Array.from(numeros);


    return {
        numeros: numerosArray,
        chance: chance
    }
}
const tirageLotto = lotto();
console.log("Numéros principaux : ", tirageLotto.numeros);
console.log("le numéro chance : ", tirageLotto.chance);


// LOTO  Fonction qui permet de tirer 5 numéros de 1 à 49 et 1 numéro de 1 à 10 au hazard
//////////////////////////////////////////////////////////////////////////////////

// EURODREAM Fonction qui permet de tirer 6 numéros de 1 à 40 et 1 numéro de 1 à 5 au hazard
function euroDream() {
    const numeros = new Set();
    const dream = genererNumeroAleatoire(1, 5);

    while (numeros.size < 6) {
        numeros.add(genererNumeroAleatoire(1, 40));
    }

    const numerosArray = Array.from(numeros);


    return {
        numeros: numerosArray,
        dream: dream
    }
}
const tirageEuroDream = euroDream();
console.log("Numéros principaux : ", tirageEuroDream.numeros);
console.log("le numero dream est ", tirageEuroDream.dream);

// EURODREAM Fonction qui permet de tirer 6 numéros de 1 à 40 et 1 numéro de 1 à 5 au hazard
//////////////////////////////////////////////////////////////////////////////////

// KENO Fonction qui permet de tirer 10 numéros de 1 à 70
function Keno() {
    const numeros = new Set();


    while (numeros.size < 10) {
        numeros.add(genererNumeroAleatoire(1, 70));
    }

    const numerosArray = Array.from(numeros);


    return {
        numeros: numerosArray
    }
}
const tirageKeno = Keno();
// console.log("Numéros principaux : ", tirageKeno.numeros);
// KENO Fonction qui permet de tirer 10 numéros de 1 à 70
//////////////////////////////////////////////////////////////////////////////////
const btnLoterie = document.getElementById("btnLoterie");
const selectLoterie = document.getElementById("choix");
const resetLoterie = document.getElementById("resetLoterie");

btnLoterie.addEventListener("click", function () {
    let valeurSelect = selectLoterie.value;
    const resultatLoterie = document.getElementById("resultatLoterie");
    switch (valeurSelect) {
        case "1":
            resultatLoterie.innerHTML = "<h2>Tirage Euromillion</h2>";
            for(numero of tirageEuromillions.numeros){
                resultatLoterie.innerHTML += `<span class="numero">${ numero } </span>`;
            }
            for(etoile of tirageEuromillions.etoiles){
                resultatLoterie.innerHTML += `<span class="complementaire">${ etoile }  </span>`;
            }
            break;

        case "2":
            resultatLoterie.innerHTML = "<h2>Tirage Lotto</h2>";
            for(numero of tirageLotto.numeros){
                resultatLoterie.innerHTML += `<span class="numero">${ numero } </span>`;
            }
            resultatLoterie.innerHTML += `<span class="complementaire">${ tirageLotto.chance }  </span>`;
            break;
        case "3":
            resultatLoterie.innerHTML = "<h2>Tirage EuroDream</h2>";
            for(numero of tirageEuroDream.numeros){
                resultatLoterie.innerHTML += `<span class="numero">${ numero } </span>`;
            }
            resultatLoterie.innerHTML += `<span class="complementaire">${ tirageEuroDream.dream }  </span>`;
            break;
        case "4":
            resultatLoterie.innerHTML = "<h2>Tirage Keno</h2>";
            for(numero of tirageKeno.numeros){
                resultatLoterie.innerHTML += `<span class="numero">${ numero } </span>`;
            }
            break;

    }
});

resetLoterie.addEventListener("click", function () {
    resultatLoterie.innerHTML = `<span class="numero"></span>`;
    resultatLoterie.innerHTML = `<span class="complementaire"></span>`;
    resultatLoterie.innerHTML = `<p>Aucune loterie de lancer</p>`;
});

