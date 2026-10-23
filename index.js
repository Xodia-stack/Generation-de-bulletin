// const prenom = "William";
// const nomDeFamille =  "Dupont";
// const dateDeNaissance = "1986-04-22";
// const isGarcon = true;
// const histoire = [2, 4, 3, 7, 9 ,5];
// const mathematiques = [12, 11, 13, 15];
// const anglais = [15, 14, 18, 19, 10];
// const francais = [8, 11, 12, 10, 0, 12, 12.5];
// const arts = [17, 16];
// const musique = [15, 16, 14, 18, 17];
// const physique = [18, 16, 15, 16];
// const sport = [13];

// const identite = {
//     prenom: prenom,
//     nomDeFamille: nomDeFamille,
//     dateDeNaissance: dateDeNaissance,
// };

// // const notes = {
// //     histoire: histoire,
// //     mathematiques: mathematiques,
// //     anglais: anglais,
// //     francais: francais,
// //     arts: arts,
// //     musique: musique,
// //     physique: physique,
// //     sport: sport
// // };

// const student = {
//   prenom,
//   nomDeFamille,
//   dateDeNaissance,
//   isGarcon,
//   notes: {
//     histoire,
//     mathematiques,
//     anglais,
//     francais,
//     arts,
//     musique,
//     physique,
//     sport,
//   },
// };

// console.log(`${student.prenom} ${student.nomDeFamille.toUpperCase()}`);
// console.log(`Né le ${student.dateDeNaissance}`);
// console.log(new Date(student.dateDeNaissance).toLocaleDateString("fr-FR"));

// function notes() {
//   console.log("HISTOIRE: ");
//   for (const note of student.notes.histoire) {
//     console.log(note);
//   }
// }

// notes();

const student = require("./student.json");
const { identite, notes } = require("./tools.js");

identite(student);

for (const matiere of Object.keys(student.notes)) {
  notes(student, matiere);
}