/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* The quicklinks button on the resources page */

function myButton() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
  }
}