//YOUR FIREBASE LINKS
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

    user=localStorage.getItem("n");
    room=localStorage.getItem("Roomname");

    function send()
    {
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room).push({
       name:user,
       message:msg,
       like:0     
      });
      document.getElementById("msg").value="";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log( firebase_message_id);
console.log( message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
n="<h4>"+name+"<img class='user_tick' src='tick.png'></h4> ";
m="<h4 class='message_h4'>"+message+"</h4>";
b="<button class='btn btn-warning' id="+ firebase_message_id+" value="+like+" onclick='updateLike(this.id)'> ";
f="<span class='glyphicon glyphicon-thumbs-up'> like- "+like+"</span></button><hr>";
row=n+m+b+f;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function updateLike(message_id)
{
      button_id=message_id;
      likes=document.getElementById(button_id).value ;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room).child(message_id).update({
            like:updated_likes 
      });
}
function signout()
{
      localStorage.removeItem("n");
      localStorage.removeItem("Roomname");
      window.location="index.html";
 
}