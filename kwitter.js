function add()
{
    user_name=document.getElementById("user").value ;
    localStorage.setItem("n", user_name);
    window.location="kwitter_room.html";
}