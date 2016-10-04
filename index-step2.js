$(document).ready(pied);

// Fonction principale
function pied(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		
			var clickInput = $('#input').val();

			
			var aleatoire = Math.round(Math.random()*5-0.5);
			console.log(aleatoire);



			if(clickInput == aleatoire){
				alert("YOU WIN");
			}
			else if (clickInput < aleatoire){
				alert("perdu, le nombre est plus petit");
			}
			 else{
			 	alert("perdu, la nombre est plus grand");
			 }
			
		
	}


$("button").click(function(){

		clickValider();

});		// Récupérer le contenu de mon input

		// Stocker un nombre ENTIER généré "aléatoirement"

		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


}