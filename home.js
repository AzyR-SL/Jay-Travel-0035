var Menu = document.getElementById('Menu');
var list = document.getElementById('list');
var isMenuOpen = false;

function navigator() {
    if (isMenuOpen) {
        Menu.style.height = "0vh";
        Menu.style.transition = "0.5s";
        list.style.display = "none";
    } else {
        Menu.style.height = "40vh";
        Menu.style.transition = "0.5s";
        list.style.display = "block";
    }
    isMenuOpen = !isMenuOpen;
}