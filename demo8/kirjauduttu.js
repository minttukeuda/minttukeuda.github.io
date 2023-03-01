function kirjautunut(){
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut","kylla")
    document.getElementById('kirjauduulos_lomake').textContent += localStorage.getItem("nimi");
}
