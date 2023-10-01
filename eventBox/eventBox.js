function eventBox() {
			var clsImage = document.getElementsByClassName("eventImage"); 
			var clsName = document.getElementsByClassName("eventName"); 
			var clsLink = document.getElementsByClassName("eventLink"); 
			for (n=0, length = clsImage.length; n < length; n++) {
				clsImage[n].setAttribute("id","eventImage_" + (n + 1)); 
				clsName[n].setAttribute("id","eventLink_" + (n + 1)); 
				clsLink[n].setAttribute("id","eventName_" + (n + 1)); 
			}
		
	}