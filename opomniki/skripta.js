window.addEventListener('load', function() {
	//stran nalozena
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var naziv = opomnik.querySelector(".naziv_opomnika").innerHTML;
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			if (cas <= 0) {
				alert("Opomnik!\nZadolžitev "+naziv+" je potekla!");
			} else {
				cas--;
				casovnik.innerHTML = cas;
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var klik = function(event) {
		var ime = document.getElementById("uporabnisko_ime").value;
		document.getElementById("uporabnik").innerHTML = ime;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	
	document.querySelector("#prijavniGumb").addEventListener("click", klik);
	
	
	var dodajOpomnik = function(event) {
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		document.querySelector("#opomniki").innerHTML += "<div class='opomnik rob senca'> \
            <div class='naziv_opomnika'>"+naziv+"</div> \
            <div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div> \
			</div>";
		
		
	}
	document.querySelector("#dodajGumb").addEventListener("click", dodajOpomnik);
	
});