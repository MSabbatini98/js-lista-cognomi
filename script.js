// Array utenti 
utenti = [  "Bianchi", 
            "Rossi", 
            "Duzioni", 
            "Balsano", 
            "Verdi"
        ];
// Inserimento nuovo utente

var new_utente = prompt("Inserisci il nuovo utente da inserire in lista")
utenti.push(new_utente);

console.log(utenti.length);

// stampa array NON ordinato
for (var i = 0; i < utenti.length; i++) {
    document.getElementById("outcome").innerHTML += utenti[i] + "<br>";
}

// ordina array
utenti.sort();

// stampa array ordinati
for (var j = 0; j < utenti.length; j++) {
    document.getElementById("outcome").innerHTML += "<br>" + utenti[j];
}

// stampa posizione nuovo array 
for (var k = 0; k < utenti.length; k++) {
    if (utenti[k] == new_utente) {
        document.getElementById("order").innerHTML = (k + 1);
    } 
}