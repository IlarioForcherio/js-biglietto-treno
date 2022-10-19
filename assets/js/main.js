


/*Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
-L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/


// chiedere all'utente l'eta
//chiedere all'utente quanti km
// moltiplicare prezzo (0.21) per i km 
// variabile per lo sconto 20%
// variabile per lo sconto 40%
// if < 18
// if > 18

function ilTuoBiglietto(){
    let etaUtente = parseInt( document.getElementById('etaUtente').value);
    console.log(etaUtente)
    let kmUtente = parseFloat( document.getElementById('kmUtente').value);
    console.log(kmUtente)


//età utente
//let etaUtente = parseInt(prompt('inserisci la tua età'));
//console.log(etaUtente);

//kilometri
//let kmUtente = parseInt(prompt('inserisci quanti km vuoi fare'));
//console.log(kmUtente);

//prezzo ticket

let prezzoTicket = kmUtente * 0.21;
console.log(prezzoTicket);

let sconto20 = ( ( prezzoTicket / 100 ) * 20);

let sconto40 = ( ( prezzoTicket / 100 ) * 20); 

//condizioni
//18 anni
if (etaUtente < 18){
    prezzoTicket = prezzoTicket - sconto20;
    
//65 anni
}else if (etaUtente > 65){
    prezzoTicket = prezzoTicket - sconto40;
    
//altre età
}else {
    prezzoTicket = prezzoTicket;
}

// document.getElementById("biglietto").innerHTML = "il tuo biglietto è "  + prezzoTicket.toFixed(2) + " euro";


document.getElementById("ilTuoBiglietto").innerHTML= `Il prezzo del biglietto è: ${prezzoTicket.toFixed(2)} Euro`;

}



















