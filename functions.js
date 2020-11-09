var addStudent= function(){

  var newStudent={
      "nome":undefined ,
      "cognome":undefined ,
      "età": undefined,
  };

  newStudent.nome=prompt("inserisci il nome del nuovo studente");
  newStudent.cognome=prompt("inserisci il cognome del nuovo studente");
  newStudent.età=prompt("inserisci l'età del nuovo studente");

  studenti.push(newStudent);

};
