function panier(nom, montant) {
    this.nom = nom;
    this.montant = montant;
    this.toString = function () {
        let chaine = "<p>Nom : "+this.nom + "</p><p>Total : " + this.montant + "</p>"
        return chaine
    }
}
const params = new URLSearchParams(document.location.search);
const nom = params.get("nom");
const montant = params.get("total")
const monPan = new panier(nom,total)
document.getElementById("main").innerHTML = monPan