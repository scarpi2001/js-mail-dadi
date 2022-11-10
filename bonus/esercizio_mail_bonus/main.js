//Chiedi all’utente la sua email,controlla che sia nella lista di chi può accedere,stampa un messaggio appropriato sull’esito del controllo.

//costanti e variabili
const listaMail = ["pippo@gmail.com","luca@gmail.com","mario@gmail.com","andrea@gmail.com"];

//richiama elementi html
const inputField = document.getElementById("email");
const myButton = document.getElementById("button");
const title = document.querySelector("h2");

myButton.addEventListener("click",

    function(){
        //Chiedi mail
        let mail = inputField.value;

        //check lista
        let invitato = false;

        for (let i = 0; i < listaMail.length; i++) {

            if (mail === listaMail[i]) {

                invitato = true;
                title.innerHTML = "Sei invitato";

            } 

        }

        if (invitato === false) {
            
            title.innerHTML = "Non sei invitato";
            
        }

        inputField.value = "";
        
    }

);


    





