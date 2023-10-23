function subloadEvents() {
			document.getElementsByClassName("coloredTitle")[0].innerHTML = "Warhammer";
			document.getElementsByClassName("coloredTitle")[1].innerHTML = "Giochi di ruolo";
			document.getElementsByClassName("coloredTitle")[2].innerHTML = "Giochi da tavolo";
			document.getElementsByClassName("coloredTitle")[3].innerHTML = "Giochi di carte";
			document.getElementsByClassName("coloredImage")[0].src = "./images/technical/warhammer.png"
			document.getElementsByClassName("coloredImage")[1].src = "./images/technical/dungeonsanddragons.png"
			document.getElementsByClassName("coloredImage")[2].src = "./images/technical/tabletop.png"
			document.getElementsByClassName("coloredImage")[3].src = "./images/technical/cards.png"
			document.getElementsByClassName("coloredLink")[0].setAttribute("href", "./pages/warhammer.html");
			document.getElementsByClassName("coloredLink")[1].setAttribute("href", "./pages/rolegames.html");
			document.getElementsByClassName("coloredLink")[2].setAttribute("href", "./pages/tablegames.html");
			document.getElementsByClassName("coloredLink")[3].setAttribute("href", "./pages/cardsgames.html");
			document.getElementsByClassName("coloredColor")[0].style.backgroundColor = "#4ec7f3";
			document.getElementsByClassName("coloredColor")[1].style.backgroundColor = "#42c58a";
			document.getElementsByClassName("coloredColor")[2].style.backgroundColor = "#dc143c";
			document.getElementsByClassName("coloredColor")[3].style.backgroundColor = "#e6c000";

			document.getElementsByClassName("eventImage")[0].src = "./images/eventi/salaGioca.png";
			document.getElementsByClassName("eventTitle")[0].innerHTML = "";
			document.getElementsByClassName("eventSubtitle")[0].innerHTML = "";
			
			document.getElementsByClassName("eventImage")[1].src = "./images/eventi/ordalia.png";
			document.getElementsByClassName("eventTitle")[1].innerHTML = "";
			document.getElementsByClassName("eventSubtitle")[1].innerHTML = "";
			
			document.getElementsByClassName("paragraphTitleTitle")[0].innerHTML = "I nostri eventi";
			document.getElementsByClassName("paragraphTitleTitle")[1].innerHTML = "Gioca insieme a noi";
			document.getElementsByClassName("paragraphSubtitleTitle")[0].innerHTML = "Warhammer";
			document.getElementsByClassName("paragraphSubtitleTitle")[1].innerHTML = "Dungeons & Dragons";
			document.getElementsByClassName("paragraphSubtitleTitle")[2].innerHTML = "Magic";
			document.getElementsByClassName("paragraphTitleTitle")[2].innerHTML = "Seguici e contattaci";

			showSlides(1);
		}