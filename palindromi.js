var input = require("readline-sync");
var nimi = input.question("Anna sana: ");
var onko = true;
nimi = nimi.replace(/\s/g, "").toLowerCase();
for (var i = 0; i < nimi.length; i++) {
  const a = nimi[i];
  const b = nimi[nimi.length - (i + 1)];

  if (a != b) {
    onko = false;
    break;
  }
}
console.log(onko);
