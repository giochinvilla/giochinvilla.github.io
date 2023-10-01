function eventBox() {
	const cls1 = document.getElementsByClassName('eventImage');
	const cls2 = document.getElementsByClassName('eventName');
	const cls3 = document.getElementsByClassName('eventLink');
	for (let i = 0; i < cls1.length; i++) {
		cls1[i].setAttribute('id', "eventImage_" + (i + 1));
		cls2[i].setAttribute('id', "eventName_" + (i + 1));
		cls3[i].setAttribute('id', "eventLink_" + (i + 1));
	}
}