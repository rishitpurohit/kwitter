
function addUser(){
    var userName = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , userName);
    window.location = "kwitter_room.html"
}
