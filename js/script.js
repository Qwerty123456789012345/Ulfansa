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