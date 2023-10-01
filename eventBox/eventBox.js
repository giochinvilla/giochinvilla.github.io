function eventBox() {
			
			var clsImage = document.getElementsByClassName("eventImage"); 
			var clsName = document.getElementsByClassName("eventName"); 
			var clsLink = document.getElementsByClassName("eventLink"); 
			for (n=0, length = clsImage.length; n < length; n++) {
				clsImage[n].id= "eventImage_" + (n + 1); 
				clsName[n].id= "eventLink_" + (n + 1); 
				clsLink[n].id= "eventName_" + (n + 1); 
			}
			
			document.getElementById("eventImage_1").src = "evento1.png";
			document.getElementById("eventImage_2").src = "evento1.png";
			document.getElementById("eventImage_3").src = "evento1.png";
			document.getElementById("eventName_1").innerHTML = "[TEST]";
			document.getElementById("eventName_2").innerHTML = "[TEST]";
			document.getElementById("eventName_3").innerHTML = "[TEST]";
		
	}