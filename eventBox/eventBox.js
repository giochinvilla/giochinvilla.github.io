function eventBox() {
			var clsImage = document.getElementsByClassName("eventImage"); 
			var clsName = document.getElementsByClassName("eventName"); 
			var clsLink = document.getElementsByClassName("eventLink"); 
			for (n=0, length = clsImage.length; n < length; n++) {
				clsImage[n].id= "eventImage_" + (n + 1); 
				clsName[n].id= "eventLink_" + (n + 1); 
				clsLink[n].id= "eventName_" + (n + 1); 
			}
		
	}