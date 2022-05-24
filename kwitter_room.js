var firebaseConfig = {
  apiKey: "AIzaSyC24ZcX6aBe0cyCeu-XQ2svpVGRclfSnS8",
  authDomain: "kwitter-b9ebe.firebaseapp.com",
  databaseURL: "https://kwitter-b9ebe-default-rtdb.firebaseio.com",
  projectId: "kwitter-b9ebe",
  storageBucket: "kwitter-b9ebe.appspot.com",
  messagingSenderId: "14204201561",
  appId: "1:14204201561:web:c276768765b27eee2e1f48"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS


  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
