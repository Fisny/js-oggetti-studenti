// PARTE 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
// nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte 
// le proprietà dell’oggetto.
// PARTE 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e 
// stampare per ognuno di essi, nome e cognome.  
// Ricordatevi, è un array, quindi? for.
// PARTE 3
// Dare la possibilità all’utente, attraverso 3 prompt() 
// - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto 
// studente inserendo nell’ordine: nome, cognome e età.
// Consigli:
// Le slide e il codice scritto oggi in classe vi saranno molto utili. 
// Riguardatevi anche i video se possono essere utili. 
// Ragionate per step, un passo alla volta, e vedrete che alla fine il tutto 
// risulterà molto semplice :occhiolino:
// Il codice lo trovate qui:
// https://github.com/ott-fogliata/boolean-code/tree/main/js-objects


// PARTE 1


var studenteSingolo = {
    name: 'bardi',
    surname: 'fisniku',
    age: 22,
}

for (var key in studenteSingolo) {
    console.log(studenteSingolo[key])
}

alert("visualizza il console.log")
alert("parte 2")

// PARTE 2 

var studenti = [
    {
        name: 'dario',
        surname: 'rossi',
        age: 22
    },
    {
        name: 'luca',
        surname: 'ianni',
        age: 22
    }
]

for (var x = 0; x < studenti.length; x++) {
    console.log(studenti[x].name, studenti[x].surname)
}

// parte 3

var newName = prompt("inserisci nome")
var newSurname = prompt ("inserisci cognome")
var newAge = prompt ("inserisci età")

studenti.push({
    name: newName,
    surname: newSurname,
    age: newAge,
})

console.log(studenti)

