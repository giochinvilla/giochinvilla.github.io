function includeHTML() {
document.getElementById('testing').innerHTML = "[TEST2.6]";
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("loadHTML");
	document.getElementById('testing').innerHTML = "[TEST2.7]";
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("loadHTML");
		  document.getElementById('testing').innerHTML = "[TEST2.8]";
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
	  document.getElementById('testing').innerHTML = "[TEST2.9]";
      /*exit the function:*/
      return;
    }
  }
};