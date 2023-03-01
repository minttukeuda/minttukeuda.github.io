document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
if (localStorage.getItem(kirjautunut) === 'kylla') {
    document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display = "none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut","kylla")
}

function kirjaudu(kylla){
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut","kylla")
    document.getElementById('kirjauduulos_lomake').textContent += localStorage.getItem("nimi");
    
}
<body> 
    <form id="kirjauduulos_lomake">
        <input id="kirjaudu_nappi" type="submit" value="Kirjaudu ulos" onClick="kirjaudu()" />
    </form>
</body>