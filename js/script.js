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
    infoStudenteSingolo: []
}

while (studenteSingolo.infoStudenteSingolo.length < 1) {
    var studentName = prompt("aggiungi nome") 
    var studentSurname = prompt("aggiungi congome") 
    var studentAge = prompt("aggiungi età") 

    studenteSingolo.infoStudenteSingolo.push({ 
        student_name: studentName, 
        student_surname: studentSurname, 
        student_age: studentAge, 
    });
}

for (var key in studenteSingolo.infoStudenteSingolo) {
    console.log(studenteSingolo.infoStudenteSingolo[key])
}

alert("visualizza il console.log")
alert("parte 2")

// PARTE 2 

var studenti = {
    infoStudenti: []
}

while (studenti.infoStudenti.length < 3) {
    var studentsName = prompt("inserisci nome")
    var studentsSurname = prompt ("inserisci cognome")

    studenti.infoStudenti.push({
        students_name: studentsName,
        stundets_surname: studentsSurname,
    })
}

for (var x = 0; x < studenti.infoStudenti.length; x++) {
    
    console.log(studenti.infoStudenti[x])
}