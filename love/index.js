function randomPositionOnHover() {
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    //when the mouse is over the button, the button will move to a random position
    document.getElementById("no").style.right = x + "%";
    document.getElementById("no").style.top = y + "%";
}
function disableContainer() {
    //when click the button, the container will be remove
    document.getElementById("container").style.display = "none";
    //when click the button, the new container with id newContainer will display
    document.getElementById("newContainer").style.display = "inline-block";
    
}