document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
let kirjautunut = 'kylla';
if (localStorage.getItem(kirjautunut === 'kylla')) {
    document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut","kylla")
}