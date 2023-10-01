function eventBox() {
			document.getElementById('testing').innerHTML = "[TEST2.1]";
			var clsImage = document.getElementsByClassName("eventImage"); 
			var clsName = document.getElementsByClassName("eventName"); 
			var clsLink = document.getElementsByClassName("eventLink"); 
			document.getElementById('testing').innerHTML = "[TEST2.2]";
			for (n=0, length = clsImage.length; n < length; n++) {
				clsImage[n].id= "eventImage_" + (n + 1); 
				clsName[n].id= "eventLink_" + (n + 1); 
				clsLink[n].id= "eventName_" + (n + 1); 
				document.getElementById('testing').innerHTML = "[TEST2.3]";
			}
		
	}