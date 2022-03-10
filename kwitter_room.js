const firebaseConfig = {
    apiKey: "AIzaSyAPwY-RmLc1kOQ95es-sYtrAHYXdWHeTWs",
    authDomain: "kwitter-78893.firebaseapp.com",
    projectId: "kwitter-78893",
    storageBucket: "kwitter-78893.appspot.com",
    messagingSenderId: "173588472053",
    appId: "1:173588472053:web:606de09220c2037845e5bc"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database.ref("/").child(room_name).update({purpose:"adding room name"});
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row="<div class='room name' id="+Room_names+"onclick=RedirectToRoomName(this.id)'>#'"+Room_names+"</div><hr>"
//End code
});});}
getData();
function RedirectToRoomName(){
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("user_name");
window.location="index.html"
}