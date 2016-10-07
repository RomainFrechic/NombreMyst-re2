$(document).ready(pied);


function pied(){

	function clickValider(){
		
		var clickInput = $('#input').val();


		var aleatoire = Math.round(Math.random()*(3-1)+1);
		console.log(aleatoire);

// Cette ligne génère aléatoirement un nombre entre 1 et 100		
var proposition = Number(prompt("Saisir un nombre entre 1 et 100 :"));

for (var i = 1; i < 6; i++) 
{
//vérifie si le nombre est entre 1 et 100 
if (proposition >= 1 && proposition <= 100)  
{

	if (proposition > aleatoire) {
		console.log(proposition + " est trop grand")
		var proposition = Number(prompt("Saisir un nombre plus petit :"));
	}
	else if (proposition < aleatoire) {
		console.log(proposition + " est trop petit")
		var proposition = Number(prompt("Saisir un nombre plus grand :"));
	}
	else if (proposition === aleatoire) {
		break;
	}
}	
else {
	console.log(proposition + " : ce nombre n'est pas compris entre 1 et 100 !");
	var proposition = Number(prompt("Saisir un autre nombre :"));
}

}


if (proposition === aleatoire) {
	console.log("Bravo ! La solution était " + proposition + ".");
	console.log("Vous avez réussi en " + i + " essai(s).");
}
// pour la limitation à 6 essais
if (i >= 6) { 
	if (proposition > aleatoire) {
		console.log(proposition + " est trop grand");
		console.log("Perdu... La solution était " + aleatoire + ".");
	}
	else if (proposition < aleatoire) {
		console.log(proposition + " est trop petit");
		console.log("Perdu... La solution était " + aleatoire + ".");

	}

}

};	

$("button").click(function(){
	$("button").click(function(){
		$("#input").text();
	});

	clickValider();

});		


}