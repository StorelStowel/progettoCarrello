let totaleSpesa = 0;

function totaleCarrello() {
    let spesaAggiunta = document.getElementById("inPrezzo").value;
    let testo = document.getElementById("outputTot");

    totaleSpesa += parseFloat(spesaAggiunta);

    testo.innerHTML = totaleSpesa + "€";
    testo.style.color = "#DC3545";
    console.log("costo totale: " + totaleSpesa);
}

function resetCarrello() {
    let testo = document.getElementById("outputTot");
    totaleSpesa = 0;
    testo.innerHTML = "0€";
    testo.style.color = "#212529";
}