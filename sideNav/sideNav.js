function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("header-logo").style.left = "300px";
  document.getElementById("header").style.width = window.innerWidth-250 + "px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("header-logo").style.left = "50px";
  document.getElementById("header").style.width = window.innerWidth + "px";
}