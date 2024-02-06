let panier;
{
    pommes = 0
    poires = 0
    peches = 0
}
let total = 0
function valider(expr) {

    switch (expr) {
        case 'Pommes':
            let valPom = parseInt(document.getElementById("nbPommes").value) * 11
            total += valPom;
            document.getElementById('total').innerText = total.toString()
            document.getElementById('totalPommes').innerText = valPom.toString() + "$"
            return;

        case 'Poires':
            let valPoi = parseInt(document.getElementById("nbPoires").value) * 12
            total += valPoi;
            document.getElementById('total').innerText = total.toString()
            document.getElementById('totalPoires').innerText = valPoi.toString() + "$"
            return;

        case 'Peches':
            let valPec = parseInt(document.getElementById("nbPeches").value) * 10
            total += valPec;
            document.getElementById('total').innerText = total.toString()
            document.getElementById('totalPeches').innerText = valPec.toString() + "$"
            return;

    }



}