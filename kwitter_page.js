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
  user_name=localStorage.setItem("user_name")
  room_name=localStorage.setItem("user_name")
  function send(){
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("message").value="";

}