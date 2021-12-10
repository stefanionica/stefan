var button = document.querySelector(".button");
var image = document.querySelector(".img-lucrare");
var wasClicked = false;

button.addEventListener("click", function() {
    if(!wasClicked) {
        image.style.width = "400px";
        wasClicked = true;
    } else {
        image.style.width = "250px";
        wasClicked = false;
    }
}, false);
