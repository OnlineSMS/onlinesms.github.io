// Get the modal
var modal = document.getElementById('settingsModal');

// Get the button that opens the modal
var btn = document.getElementById("settings");

// Get the <span> element that closes the modal
var span = modal.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Get the modal
var omodal = document.getElementById('peopleModal');

// Get the button that opens the modal
var obtn = document.getElementById("online");

// Get the <span> element that closes the modal
var ospan = omodal.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
obtn.onclick = function() {
    omodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ospan.onclick = function() {
    omodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == omodal) {
        omodal.style.display = "none";
    }
    
    if (event.target == modal) {
        modal.style.display = "none";
    }
}