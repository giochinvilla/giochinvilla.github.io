		function subloadEvents() {
			document.getElementsByClassName("paragraphTitleTitle")[0].innerHTML = "Giochi di ruolo";
			document.getElementsByClassName("paragraphSubtitleTitle")[0].innerHTML = "Yu-gi-ho";
			document.getElementsByClassName("paragraphSubtitleTitle")[1].innerHTML = "Magic";
			document.getElementsByClassName("paragraphSubtitleTitle")[2].innerHTML = "Pokemon";
			document.getElementsByClassName("paragraphTitleTitle")[1].innerHTML = "I Nostri giochi";
			document.getElementsByClassName("paragraphTitleTitle")[2].innerHTML = "Galleria";
			document.getElementsByClassName("paragraphTitleTitle")[3].innerHTML = "Seguici e contattaci";
			
			showSlides(1);
			
			document.getElementsByClassName("eventImage")[0].src = "../images/cardsgames_gallery/gallery1.png";
			document.getElementsByClassName("eventImage")[1].src = "../images/cardsgames_gallery/gallery2.png";
			document.getElementsByClassName("eventImage")[2].src = "../images/cardsgames_gallery/gallery3.png";
		}