const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0
}
//Créer une fonction qui lorseque l'on clique sur un des buttons on ajoute 1 des sacs respectif au button clicker,
// le prix et le poids du sac au total dans le tableau a la fin
function AjouterUnSac(){
    if(<button onClick="AppleButton">Acheter un sac de pommes</button>)
    {
        let pommes = document.getElementById(pommes).value;
        let prix = document.getElementById(prixPommes);


    }
// créer ensuite

    <button onClick="PoiresButton">Acheter un sac de Poires></button>

    <button onClick="PrunesButton">Acheter un sac de prunes></button>

}


/*
    let ancienPrix = document.getElementById("prixTotal").innerText;
    let nouveauPrix = +ancienPrix + +prix;                          // +variable : convertir en numérique
    document.getElementById("prixTotal").innerText = nouveauPrix;

    let ancienPoids = document.getElementById("poidsTotal").innerText;
    let nouveauPoids = +ancienPoids + +poids;                          // +variable : convertir en numérique
document.getElementById("poidsTotal").innerText = nouveauPoids;
*/


// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;
