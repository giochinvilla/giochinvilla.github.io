function eventBox() {
			
			var cls = document.getElementsByClassName("eventImage"); 
			for (n=0, length = cls.length; n < length; n++) {
				cls[n].id= "eventImage_" + (n + 1); 
			}
			for (n=0, length = cls.length; n < length; n++) {
				cls[n].id= "eventLink_" + (n + 1); 
			}
			for (n=0, length = cls.length; n < length; n++) {
				cls[n].id= "eventName_" + (n + 1); 
			}
		
	}