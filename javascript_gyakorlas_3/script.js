legorduloMenu = document.getElementById("legorduloMenu");
fetch("test.json")
  .then((response) => response.json())
  .then((adat) => {
    //console.log(adat);
    // Itt dolgozhatod fel az adatokat
    legorduloMenu = document.getElementById("legorduloMenu");
    var kontinensek = new Array;
    for (var i = 0; i < adat.varosok.length; i++) {
        if(!kontinensek.includes(adat.varosok[i].kontinens)) {
            kontinensek.push(adat.varosok[i].kontinens);
        }
    }
    for(var i = 0; i < kontinensek.length; i++){
        //legorduloMenu.innerHTML += '<option value="' + kontinensek[i] +'">' + kontinensek[i] + '</option>';
        legorduloMenu.innerHTML += '<option value="' + kontinensek[i] +'">' + kontinensek[i] + ' </option>';
    }
  })

  .catch((error) =>
    console.error("Hiba történt a fájl beolvasása során: ", error)
  );

function betoltesJSON() {
  fetch("test.json")
    .then((response) => response.json())
    .then((adat) => {
      //console.log(adat);
      // Itt dolgozhatod fel az adatokat
      legorduloMenu = document.getElementById("legorduloMenu").value;
      DivBetoltesJSON = document.getElementById("container");
      DivBetoltesJSON.innerHTML = "";
      for (var i = 0; i < adat.varosok.length; i++) {
        if (legorduloMenu == adat.varosok[i].kontinens) {
          DivBetoltesJSON.innerHTML += adat.varosok[i].orszag;
          DivBetoltesJSON.innerHTML += "<br>";
        }
      }
    })
    .catch((error) =>
      console.error("Hiba történt a fájl beolvasása során: ", error)
    );
}
