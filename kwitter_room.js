// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDg8KJSN0kSbh3hjagCEGf-T1FJtM5UIBA",
      authDomain: "kwitter-2-44fb0.firebaseapp.com",
      databaseURL: "https://kwitter-2-44fb0-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-44fb0",
      storageBucket: "kwitter-2-44fb0.appspot.com",
      messagingSenderId: "246742369918",
      appId: "1:246742369918:web:a80e5e040a0fafb5ab7a2f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);



      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"

            });
            localStorage.setItem("room",room_name);
            window.location="kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      Room_names = childKey;
       console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;

      //End code
      });});}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";

}

function signout()
{
      localStorage.removeItem("n");
      localStorage.removeItem("Roomname");
      window.location="index.html";
 
}