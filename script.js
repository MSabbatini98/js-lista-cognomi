// Array utenti 
utenti = [  "Bianchi", 
            "Rossi", 
            "Duzioni", 
            "Balsano", 
            "Verdi"
        ];
// Inserimento nuovo utente
var new_utenti = [];
// var option = "s";
console.log(utenti.length);

// while (option == "s" || option == "S") { 
    
    var new_utente = prompt("Inserisci il nuovo utente da inserire in lista")
    utenti.push(new_utente);

    // stampa array NON ordinato CON nuovo elemento
    for (var i = 0; i < utenti.length; i++) {
        document.getElementById("outcome").innerHTML += utenti[i] + "<br>";
    }

    // ciclo che mette la maiuscola    
    for (var i = 0; i < utenti.length; i++) {
        var first;
        var last;
        var final_word;

        last =  utenti[i].substring(1);
        first = utenti[i][0].toUpperCase();
        last = last.toLowerCase();
        final_word = first + last;
        console.log(final_word);
        new_utenti.push(final_word);
    }
    // ordina array
    new_utenti.sort();
    // stampa array ordinati
    for (var j = 0; j < new_utenti.length; j++) {
        document.getElementById("outcome_2").innerHTML +=  "<br>" + new_utenti[j];
    }
    // stampa posizione nuovo array 
    for (var k = 0; k < new_utenti.length; k++) {
        if (new_utenti[k].toLowerCase() == new_utente.toLowerCase()) {
            document.getElementById("order").innerHTML = (k + 1) + " su " + new_utenti.length;
            console.log(k, new_utenti.length);
        } 
    }
    // option = prompt("Vuoi inserire un altro elemento ? (s per sì, altro per no)");
// }