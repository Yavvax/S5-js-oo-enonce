let panier;
{
    pommes = 0
    poires = 0
    peches = 0
}

function valider(expr) {

    switch (expr) {
        case 'Pommes':
            let valPom = parseInt(document.getElementById("nbPommes").value) * 11
            document.getElementById('totalPommes').innerText = valPom.toString()

        case 'Poires':
            let valPoi = parseInt(document.getElementById("nbPommes").value) * 12
            document.getElementById('totalPoires').innerText = valPoi.toString()

        case 'Peches':
            let valPec = parseInt(document.getElementById("nbPommes").value) * 10
            document.getElementById('totalPeches').innerText = valPec.toString()

    }



}