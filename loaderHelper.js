function loadExternalHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("loadHTML");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "";}
                    elmnt.removeAttribute("loadHTML");
                    loadExternalHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
};

function rotateLogo() {
    const text = document.querySelector(".rotatinglogo");
    text.innerHTML = text.innerText
        .split("")
        .map(
        (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
    ).join("");
}