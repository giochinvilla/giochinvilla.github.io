function eventBox() {
	var iframe = document.getElementsByClassName("eventBoxFrame");
	for (let i = 0; i < iframe.length; i++) {
		iframe[i].contentWindow.document.getElementsByClassName('eventName')[0].setAttribute('id', "eventName_" + (i + 1));
		iframe[i].contentWindow.document.getElementsByClassName('eventImage')[0].setAttribute('id', "eventImage_" + (i + 1));
		iframe[i].contentWindow.document.getElementsByClassName('eventImage')[0].setAttribute('id', "eventLink_" + (i + 1));
	}
}