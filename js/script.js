$(".hamburger").click(function(){
 $(this).toggleClass("is-active");
});

$(".post-image").slideDown("slow");
if(testing==false)
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
        location.replace("https://ulfansa-1590486246579.web.app/login.html");
    }
  });

var inputs = $("#h-menu input[type=radio]");

$(document).ready(function () {

$("#h-menu input[type=radio]").on("change",function(e){

  if($("#home-btn").prop("checked")==false){
    $("#home").css("display","none");
  }
  else{
    $("#home").css("display","block");
  }

  if($("#gallery-btn").prop("checked")==false){
    $("#gallery").css("display","none");
  }
  else{
    $("#gallery").css("display","block");
  }

  if($("#user-setting-btn").prop("checked")==false){
    $("#user-setting").css("display","none");
  }
  else{
    $("#user-setting").css("display","block");
  }
});


$("#logout-btn").click(function(){
  firebase.auth().signOut().then(function() {
 
  }).catch(function(error) {
    alert("Something Went Wrong!");
  });
});
});

