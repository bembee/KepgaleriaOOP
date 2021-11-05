class Kep {
  constructor(elem, adat, index) {
    this.elem = elem;
    this.adat = adat;
    this.adat.index = index
    this.cim = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.setAdatok(this.adat);
    this.elem.on("click", () => {
      this.KattintasTrigger();  
    });
  }

  setAdatok(ertekek) {
    this.cim.html(ertekek.cim);
    this.kep.attr("src", ertekek.eleresiUt);
    this.leiras.html(ertekek.leiras);
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("kepValt", { detail: this.adat });
    window.dispatchEvent(esemeny);
  }
}
