function toggleNav() {
    // Bring out the nav menu
    if(document.getElementById("nav").style.top == "0px") {
        
        document.getElementById("nav").style.top ="-120px"
    }
    else{
    document.getElementById("nav").style.top = "0px"
    }
}