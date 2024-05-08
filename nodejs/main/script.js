// script.js
function getIP() {
    // Itt a fetch kérés
    fetch('/getip')
        .then(response => response.text()) // szövegként kezeljük a választ
        .then(ip => {
            console.log(ip);
            document.getElementById()
        })
        .catch(error => console.error("Hiba történt", error)); // Kezeljük a hibákat
}


