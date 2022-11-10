//Generare un numero random da 1 a 6,sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.

//richiama elementi html
const myButton = document.getElementById("button");
const yourNumber = document.querySelector("#your_number h3");
const pcNumber = document.querySelector("#pc_number h3");
const winLose = document.querySelector("#win_lose h1");

//crea evento click bottone
myButton.addEventListener("click",

    function(){
        //genera numeri
        let playerNumber = Math.floor(Math.random() * 7);
        let computerNumber = Math.floor(Math.random() * 7);
        //confronta numeri e stabilisci vincitore
        if (playerNumber > computerNumber) {

            yourNumber.innerHTML = playerNumber;
            pcNumber.innerHTML = computerNumber;
            winLose.innerHTML = "hai vinto";

        } else if (playerNumber < computerNumber) {

            yourNumber.innerHTML = playerNumber;
            pcNumber.innerHTML = computerNumber;
            winLose.innerHTML = "hai perso";

        } else {

            yourNumber.innerHTML = playerNumber;
            pcNumber.innerHTML = computerNumber;
            winLose.innerHTML = "pareggio";

        }

        console.log(playerNumber, computerNumber, winLose);
    }

);




