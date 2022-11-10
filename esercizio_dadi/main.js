//Generare un numero random da 1 a 6,sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.

//genera numeri
let playerNumber = Math.floor(Math.random() * 7);
let computerNumber = Math.floor(Math.random() * 7);
console.log("tuo numero " + playerNumber,"numero del computer " + computerNumber)

//stabilisci vincitore
if (playerNumber > computerNumber) {
    console.log("hai vinto");
} else if (playerNumber < computerNumber) {
    console.log("hai perso");
} else {
    console.log("pareggio");
}
