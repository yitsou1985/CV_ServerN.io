

 const openMenu=()=>{document.querySelector(".sidebar").classList.add("open")}
const closeMenu= () =>{document.querySelector(".sidebar").classList.remove("open")}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


