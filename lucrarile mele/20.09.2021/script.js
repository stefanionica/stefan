var button = document.querySelector(".button");
var image = document.querySelector(".img-lucrare");
var wasClicked = false;

button.addEventListener("click", function() {
    if(!wasClicked) {
        image.style.width = "500px";
        image.style.height = "350px"
        wasClicked = true;
    } 
    else {
        image.style.width = "280px";
        image.style.height = "180px"
        wasClicked = false;
    }
}, false);
