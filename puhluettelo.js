function henkilo(nimi, pnum) {
  this.nimi = nimi;
  this.pnum = pnum;
}

const luettelo = new Map();
var input = require("readline-sync");
while (true) {
  var nimi = input.question("kerro nimi: ");
  var pnum = input.question("kerro puh num: ");
  var henkiloo = new henkilo(nimi, pnum);
  luettelo.set(henkiloo.nimi, henkiloo.pnum);
  var jatkot = input.question("jatketaanko (y/n):");
  if (jatkot == "n") {
    break;
  }
}
function haku(h_nimi, luettelo) {
  return luettelo.get(h_nimi);
}

console.log(haku("otto", luettelo));
