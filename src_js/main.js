// Function To Toggle The NavBar Appearing Using The Toggle Button
function toggleNav() {
    // Bring out the nav menu
    if(document.getElementById("nav").style.top == "0px") {
        
        document.getElementById("nav").style.top ="-120px"
    }
    else{
    document.getElementById("nav").style.top = "0px"
    }
}


// Function To Activate Party Mode
function partyMode() {
    var partyText = document.getElementById("bodyText");
    partyText.classList.toggle("rainbow");

    var partyBtn = document.getElementById("prty");
    partyBtn.classList.toggle("prty-click");

}