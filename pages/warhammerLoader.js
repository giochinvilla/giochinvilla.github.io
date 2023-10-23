		function subloadEvents() {
			document.getElementsByClassName("paragraphTitleTitle")[0].innerHTML = "Warhammer 40k";
			document.getElementsByClassName("paragraphSubtitleTitle")[0].innerHTML = "WIP";
			document.getElementsByClassName("paragraphSubtitleTitle")[1].innerHTML = "WIP";
			document.getElementsByClassName("paragraphSubtitleTitle")[2].innerHTML = "WIP";
			document.getElementsByClassName("paragraphTitleTitle")[1].innerHTML = "Le nostre partite";
			document.getElementsByClassName("paragraphTitleTitle")[2].innerHTML = "Galleria";
			document.getElementsByClassName("paragraphTitleTitle")[3].innerHTML = "Seguici e contattaci";
			
			showSlides(1);
			
			document.getElementsByClassName("eventImage")[0].src = "../images/warhammer_gallery/gallery1.png";
			document.getElementsByClassName("eventImage")[1].src = "../images/warhammer_gallery/gallery2.png";
			document.getElementsByClassName("eventImage")[2].src = "../images/warhammer_gallery/gallery3.png";
		}