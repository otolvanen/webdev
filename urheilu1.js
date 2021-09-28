class henkilo {
  constructor(e, s, kn, sv) {
    this.enimi = e;
    this.snimi = s;
    this.knimi = kn;
    this.svuosi = sv;
  }
}

class urheilija extends henkilo {
  constructor(e, skn, sv) {
    super(e, skn, sv);
  }
  set_paino(p) {
    this.paino = p;
  }
  get_paino() {
    return this.paino;
  }
  set_laji(p) {
    this.laji = p;
  }
  get_laji() {
    return this.laji;
  }
}
var input = require("readline-sync");
var nimi = input.question("kerro nimi: ");
var laji = input.question("kerro laji: ");
var urh = new urheilija(nimi, "lol", "lol", "96");
urh.set_paino("80");
urh.set_laji(laji);
console.log(urh.get_laji, urh.get_paino);
