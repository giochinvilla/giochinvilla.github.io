function eventBox() {
	const cls1 = document.getElementsByClassName('eventImage');
	const cls2 = document.getElementsByClassName('eventName');
	const cls3 = document.getElementsByClassName('eventLink');
	document.getElementById("testA").innerHTML = cls1.length;
	for (let i = 0; i < cls1.length; i++) {
		cls1[i].setAttribute('id', "eventImage_" + (i + 1));
	}
	for (let i = 0; i < cls2.length; i++) {
		cls2[i].setAttribute('id', "eventName_" + (i + 1));
	}
	for (let i = 0; i < cls3.length; i++) {
		cls3[i].setAttribute('id', "eventLink_" + (i + 1));
	}
	
	var iframe = document.getElementsByClassName("eventBoxFrame");
	for (let i = 0; i < iframe.length; i++) {
		document.getElementById("testA").innerHTML = iframe.length;
		iframe[0].contentWindow.document.getElementsByClassName('eventName')[0].setAttribute('id', "eventName_" + (i + 1));
	}

	
	/*var iframea = document.getElementById("eventBoxFrame");
    var innerDoc = iframea.contentDocument || iframea.contentWindow.document;
	const iframe = document.getElementById('eventBoxFrame');
	document.getElementById("testA").innerHTML = "B.1";
	const iframe2 = iframe.contentDocument || iframe.contentWindow.document;
	document.getElementById("testA").innerHTML = "B.2";
	const iframe3 = iframe2.getElementById("eventName");
	document.getElementById("testA").innerHTML = "B.3";
	iframe3[0].setAttribute('id', "eventName_" + (i + 1));
	document.getElementById("testA").innerHTML = "C";
	iframe.contentDocument.getElementsByClassName('eventName')[0].textContent = "Reach";
	document.getElementById("testA").innerHTML = "D";*/
}