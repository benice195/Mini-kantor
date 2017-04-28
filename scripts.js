$(document).ready(function () {
	
	var usd = 3.87;
	var eur = 4.22;
	$("#kursWalut").append("<p>USD: " + usd + "</p>");
	$("#kursWalut").append("<p>EUR: " + eur + "</p>");
	
	function showValue() {
		var wartoscLogin = document.getElementById("login");
		var wartoscPassword = document.getElementById("password");	
		var jakiLogin = wartoscLogin.value;
		var jakiPass = wartoscPassword.value;
		var poprawnyLogin = "ab";
		var poprawnyPass = "cd";
		
		if (poprawnyLogin === jakiLogin && poprawnyPass === jakiPass) {
			$("#loginName").remove();
			$("#login").remove();
			$("#passwordName").remove();
			$("#password").remove();
			$("#submit").remove();
			$("#tablicaWalut").append("<input type='button' value='Odśwież stronę' id='odswiez' onclick='location.reload()'>");
			
			function tablica() {
				
				$("#pokaz").append("<div id='kwotyPierwsze'></div>")
				$("#pokaz").append("<div id='kwotyDrugie'></div>")
				$("#kwotyPierwsze").append("<input type='text' placeholder='kwota' id='walutaPn1'>");
				$("#kwotyPierwsze").append("<input type='button' value='przeslij' id='przeslijPl1'>");
				$("#kwotyDrugie").append("<input type='text' placeholder='Ile PLN chcesz zamienić?' id='walutaPn2'>");
				$("#kwotyDrugie").append("<input type='button' value='transferUSD' id='przeslijPl2'>");
				$("#kwotyDrugie").append("<input type='button' value='transferEUR' id='przeslijPl3'>");
				
				var wartoscZloty1 = document.getElementById("walutaPn1");
				var wartoscZloty2 = document.getElementById("walutaPn2");
				
				$("#przeslijPl1").click(function () {
					$("#kwotapl").remove();
					$("#kwotaplGlowna").remove();
					
					var kwotaPl1 = wartoscZloty1.value;
					var kwotaGlowna = wartoscZloty1.value;
					if (kwotaPl1 > 0) {
						$("#kwotyPierwsze").append("<p id='kwotaplGlowna'>Kwota podstawowa: " + kwotaGlowna + " PLN </p>");
						$("#kwotyPierwsze").append("<p id='kwotapl'>Pozostało: " + kwotaPl1 + " PLN </p>");
					} else {
						alert("Nie podano kwoty!");
					}
					
					
				});
				
				//Przeliczanie na USD
				
				$("#przeslijPl2").click(function () {
					var kwotaPl1 = wartoscZloty1.value;
					var kwotaPl2 = wartoscZloty2.value;
					var kwotaPoTransferze = kwotaPl1 - kwotaPl2 + " PLN";
					var kwotaDoUsd = (kwotaPl2 / usd);
					var iloscDolcow = kwotaDoUsd.toFixed(2);
					$("#kwotapl2").remove();			
					$("#kwotyDrugie").append("<p id='kwotapl2'>" + iloscDolcow + " dolarów </p>");
					$("#kwotapl").html("Pozostało: " + kwotaPoTransferze);
					
				});
				
				// przeliczanie na EUR
				
				$("#przeslijPl3").click(function () {
					var kwotaPl1 = wartoscZloty1.value;
					var kwotaPl2 = wartoscZloty2.value;
					var kwotaPoTransferze = kwotaPl1 - kwotaPl2 + " PLN";
					var kwotaDoUsd = (kwotaPl2 / eur);
					var iloscDolcow = kwotaDoUsd.toFixed(2);
					$("#kwotapl2").remove();				
					$("#kwotyDrugie").append("<p id='kwotapl2'>" + iloscDolcow + " Euro </p>");
					$("#kwotapl").html("Pozostało: " + kwotaPoTransferze);
					
				});
			}
			tablica();

		} else alert("Błąd! Źle podany login lub hasło. Twój login to: ab, a haslo: cd.");

	};
	$("#submit").click(function() {
		showValue();
	});
	
})

	



