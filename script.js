$(function () {
  const kepek = [
    {
      cim: "1. kép címe",
      eleresiUt: "images/1.jpg",
      leiras: "1. kép leírása",
    },
    {
      cim: "2. kép címe",
      eleresiUt: "images/2.jpg",
      leiras: "2. kép leírása",
    },
    {
      cim: "3. kép címe",
      eleresiUt: "images/3.jpg",
      leiras: "3. kép leírása",
    },
  ];

  const szuloElem = $("article");
  const sablonElem = $(".Kep");
  const nagykepElem = $("#nagyKep");
  let aktIndex = 0;

  kepek.forEach(function (adat, index) {
    let ujElem = sablonElem.clone().appendTo(szuloElem);
    const kep = new Kep(ujElem, adat, index);

  });
  sablonElem.remove();

  let ujElem = sablonElem.clone().appendTo(nagykepElem);
  const nagykep = new Kep(ujElem, kepek[aktIndex], aktIndex);
  sablonElem.remove();

  $(window).on("kepValt", (event) => {
    nagykep.setAdatok(event.detail);
    aktIndex = event.detail.index;
    console.log(aktIndex);
  });

  $("#bal").click(bal);
  $("#jobb").click(jobb);

  function bal() {
    aktIndex--;
    if (aktIndex < 0) {
      aktIndex = kepek.length - 1;
    }
    nagykep.setAdatok(kepek[aktIndex]);
  }

  function jobb() {
    // console.log(aktIndex);
    aktIndex++;
    if (aktIndex > kepek.length - 1) {
      aktIndex = 0;
    }
    nagykep.setAdatok(kepek[aktIndex]);

  }
});
