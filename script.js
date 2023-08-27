var myBox = document.getElementById("Bar");
var myBox2 = document.getElementById("close");
var ccaas = document.getElementById("ccaas");
var ccaas2 =document.getElementById("ccaas2");

// Add a click event listener to the element
    myBox.addEventListener("click", function() {
// Change the background color
    ccaas.style.display = "block";
    ccaas2.style.display = "none";
    });

    myBox2.addEventListener("click", function() {
// Change the background color
    ccaas.style.display = "none";
    ccaas2.style.display = "flex";
    });
