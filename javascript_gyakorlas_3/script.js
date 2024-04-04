legorduloMenu = document.getElementById("legorduloMenu");
fetch("test.json")
  .then((response) => response.json())
  .then((adat) => {
    //console.log(adat);
    // Itt dolgozhatod fel az adatokat
    legorduloMenu = document.getElementById("legorduloMenu");
    var kontinensek = new Array();
    for (var i = 0; i < adat.varosok.length; i++) {
      if (!kontinensek.includes(adat.varosok[i].kontinens)) {
        kontinensek.push(adat.varosok[i].kontinens);
      }
    }
    for (var i = 0; i < kontinensek.length; i++) {
      //legorduloMenu.innerHTML += '<option value="' + kontinensek[i] +'">' + kontinensek[i] + '</option>';
      legorduloMenu.innerHTML +=
        '<option value="' +
        kontinensek[i] +
        '">' +
        kontinensek[i] +
        " </option>";
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
//XML-re valo lekrdezes elvalasztas
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// A legördülő menü kiválasztása
let legorduloMenuXML = document.getElementById("legorduloMenuXML");

function betoltXML() {
    fetch("test.xml")
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((adatXML) => {
        console.log("test");
      const varosok = adatXML.getElementsByTagName("varos");
      let kontinensek = [];

      for (let i = 0; i < varosok.length; i++) {
        const kontinens =
          varosok[i].getElementsByTagName("kontinens")[0].childNodes[0]
            .nodeValue;
        if (!kontinensek.includes(kontinens)) {
          kontinensek.push(kontinens);
        }
      }

      legorduloMenuXML.innerHTML = ""; // A legördülő menü ürítése
      kontinensek.forEach((kontinens) => {
        legorduloMenu.innerHTML += `<option value="${kontinens}">${kontinens}</option>`;
      });
      legorduloMenuXML;
    })
    .catch((error) =>
      console.error("Hiba történt a fájl beolvasása során: ", error)
    );
}

function betoltesXML() {
  fetch("test.xml")
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((adatXML) => {
      console.log("test");
      const varosok = adatXML.getElementsByTagName("varos");
      const kivalasztottKontinens =
        document.getElementById("legorduloMenuXML").value;
      let DivBetoltesXML = document.getElementById("containerXML");
      DivBetoltesXML.innerHTML = ""; // A tartalom ürítése

      for (let i = 0; i < varosok.length; i++) {
        const kontinens =
          varosok[i].getElementsByTagName("kontinens")[0].childNodes[0]
            .nodeValue;
        if (kivalasztottKontinens == kontinens) {
          const orszag =
            varosok[i].getElementsByTagName("orszag")[0].childNodes[0]
              .nodeValue;
          DivBetoltesXML.innerHTML += orszag + "<br>";
        }
      }
    })
    .catch((error) =>
      console.error("Hiba történt a fájl beolvasása során: ", error)
    );
}

// Függvények hívása az oldal betöltésekor
betoltXML();
