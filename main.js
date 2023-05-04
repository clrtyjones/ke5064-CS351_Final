function toggleNav() {
    var nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("hidden");
    var toggleButton = document.getElementsByClassName("toggle-button")[0];
    toggleButton.classList.toggle("nav-open");
}  