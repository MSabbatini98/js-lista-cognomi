array = [   "Bianchi", 
            "Rossi", 
            "Duzioni", 
            "Balsano", 
            "Verdi"
        ];
console.log(array.length);
for (var i = 0; i < array.length; i++) {
    document.getElementById("outcome").innerHTML += array[i] + "<br>";
}
array.sort();
for (var i = 0; i < array.length; i++) {
    document.getElementById("outcome").innerHTML += "<br>" + array[i];
}