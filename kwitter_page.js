//YOUR FIREBASE LINKS
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
var room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ names +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4' > "+ message +"</h4>;"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: "+ like + "</span> </button> <br>" 
row = name_with_tag + message_with_tag + like_button+ span_with_tag
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }

      getData();


      function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name:user_name , 
 message:msg ,
 like:0    
});
document.getElementById("msg").value="";
}

function updateLike(message_id){
console.log("clicked on like button" + message_id);   
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;

firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
});
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location = "index.html";
}