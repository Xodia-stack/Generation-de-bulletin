function identite(student) {
  console.log(`${student.prenom} ${student.nomDeFamille.toUpperCase()}`);
  console.log(student.dateDeNaissance);
}

function notes(student, matiere) {
  console.log(`${matiere.toUpperCase()}: `);
  for (const note of student.notes[matiere]) {
    console.log(note);
  }
}

module.exports = { identite, notes };