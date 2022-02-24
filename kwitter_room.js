
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCb2_OUFWo2igw1KH3wgY9ecErxOjvns7w",
      authDomain: "omniversalchat.firebaseapp.com",
      databaseURL: "https://omniversalchat-default-rtdb.firebaseio.com",
      projectId: "omniversalchat",
      storageBucket: "omniversalchat.appspot.com",
      messagingSenderId: "905382387881",
      appId: "1:905382387881:web:8e4e4d7fe631083e4f49b8"
    };
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = 'Welcome ' + user_name + " !!! ";



function getData() { 
      firebase.database().ref("/").on('value', function(snapshot) { 
        document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) { 
            childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
       });
     });
   
   }
   
   getData();

function addRoom(){
var room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name" , room_name);
window.location =  "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location =  "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

