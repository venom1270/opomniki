window.addEventListener('load', function() {
	//stran nalozena
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var klik = function(event) {
		var ime = document.getElementById("uporabnisko_ime").value;
		document.getElementById("uporabnik").innerHTML = ime;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	
	document.querySelector("#prijavniGumb").addEventListener("click", klik);
	
});