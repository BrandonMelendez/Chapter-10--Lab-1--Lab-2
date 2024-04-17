/*
* Student Name: Brandon Melendez
* File Name: script.js
* Today's Date: 4/17/24
* */

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}