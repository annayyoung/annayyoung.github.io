$(document).ready(function(){
  $("body").click(function() {
    $(".st0").addClass("finish");
    $("#welcomeText").addClass("skipFade");

  });

  $('#squig').removeClass('fade-out');

  welcomeText.addEventListener("animationend", function(){
    $(".arrow").fadeIn(400);
  });

  $(".arrow").on("mouseover", function() {
    console.log("hello");
    $(".arrow").css("cursor","pointer");
  });

  $(".arrow").on("click", function() {
    event.preventDefault();
  //  window.location.href = "about_me.html"
    newLocation = "about_me.html"
    $("body").fadeOut(2000, newPage);
  });

  function newPage() {
    window.location = newLocation;
  }



  /*$(".arrow").on("click", function() {

  }) */


  });
