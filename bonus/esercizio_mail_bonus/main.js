//Chiedi all’utente la sua email,controlla che sia nella lista di chi può accedere,stampa un messaggio appropriato sull’esito del controllo.

//costanti e variabili
const listaMail = ["pippo@gmail.com","luca@gmail.com","mario@gmail.com","andrea@gmail.com"];

//Chiedi mail
let mail = prompt("inserisci la tua email");

//check lista
let invitato = false;

for (let i = 0; i < listaMail.length; i++) {

    if (mail === listaMail[i]) {

        invitato = true
        console.log("sei invitato");

    } 

}

if (invitato === false) {
    console.log("non sei invitato");
}

    





