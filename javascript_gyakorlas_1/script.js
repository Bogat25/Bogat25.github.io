var checkbox_szam;
var radio_szam;

function cimkeBekereoLetrehozasa() {
	/*
	TO DO:
	- változók létrehozása a bekért értékek tárolásához
	- változó létrehozása az új tartalom tárolásához
	- a bekért értékek lekérése
	- a "masodik" div tartalmának létrehozása
	- az "elso" div elrejtése és a "masodik" div láthatóvá tétele
	*/

	checkbox_szam = parseInt(document.getElementById('checkbox_szam').value);
	radio_szam = parseInt(document.getElementById('radio_szam').value);
	console.log(checkbox_szam, typeof(checkbox_szam));
	console.log(radio_szam, typeof(radio_szam));
	
	var tartalom = "<form>";
	// checkboxok bekérése (címke és bejelölés)
	for (i=1; i<=checkbox_szam; i++) {
		tartalom += "<label>A(z) " + i + ". checkbox címkéje: <input type='text' name='checkboxok' id=checkbox_" + i + "></label>";
		tartalom += "<label> Legyen bepipálva? <input type='checkbox' name='checkboxok_checked'></label><br>";
	}
	// radio gombok bekérése (címke)
	tartalom += "<br>";
	for (i=1; i<=radio_szam; i++) {
		tartalom += "<label>A(z) " + i + ". radio gomb címkéje: <input name='radiok' id=radio_" + i + " type='text'></label><br>";
	}
	// melyik radio gomb legyen kiválasztva (választó)
	tartalom += "Hányadik radio gomb legyen az alapértelmezetten kiválasztott? <select id='radio_id_select'>";
	for (i=1; i<=radio_szam; i++) {
		tartalom += "<option value=" + i + ">" + i + "</option>";
	}
	tartalom += "</select><br><br>";
	tartalom += "<input type='button' value='Mehet' onclick='elemekLetrehozasa()'></button>";
	tartalom += "</form>";
	document.getElementById("masodik").innerHTML = tartalom;
	
	document.getElementById("elso").style.display = "none";
	document.getElementById("masodik").style.display = "block";
}

function elemekLetrehozasa() {
	/*
	TO DO:
	- változó létrehozása az új tartalom tárolásához
	- a "harmadik" div tartalmának létrehozása a bekért értékek alapján
	- a "masodik" div elrejtése és a "harmadik" div láthatóvá tétele
	*/
}