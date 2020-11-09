// esercizio del pomeriggio:

// 1.Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// 2.Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// 3.Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//1.Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

//Creare uno studente con le seguenti proprietà:nome cognome età
var studente = {
  "nome": "Mario",
  "cognome": "Rossi",
  "età": 29,
};

//Stampare con "for in" tutte le proprietà

for (var key in studente){
  console.log("la proprietà `" + key + "` ha come valore: "+ studente[key]);
};

// 2.Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

//Creare un array di oggetti di studenti

var studenti=[{
  "nome": "Mario",
  "cognome": "Rossi",
  "età": 29,
  },
  {
  "nome": "Luigi",
  "cognome": "Verdi",
  "età": 42,
  },
  {
  "nome": "Giuseppe",
  "cognome": "Bianchi",
  "età": 67,
  },
];

//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
studenti.forEach(function(element){

    console.log("la proprietà `Nome` ha come valore: "+ element.nome);
    console.log("la proprietà `Cognome` ha come valore: "+ element.cognome);

  }
);

// 3.Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

addStudent();
console.log(studenti);
