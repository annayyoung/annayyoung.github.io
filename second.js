$(document).ready(function() {
  $("body").hide().fadeIn(2000);

//  $("body").css("background-image", "url('background.svg')").hide().fadeIn(2000);

/*  $(".has-overlay").on("mouseover", function() {
    $(".has-overlay").animate({opacity:.5}, 1500)
    $(".square").animate({opacity:1}, 1500)
  });

  $(".has-overlay").on("mouseleave", function() {
    $(".has-overlay").animate({opacity:0}, 1500)
    $(".square").animate({opacity:0}, 1500)
  }); */

  $(".square").on("mouseover",function() {
    $(".square").animate({opacity:1}, 1500)
    $(".has-overlay").animate({opacity:.5}, 1500)
  })
   $(".square").on("mouseleave",function() {
    $(".has-overlay").mouseenter(function() {

    })
    $(".wrapper").mouseenter(function() {
      $(".square").animate({opacity:0}, 1500)
      $(".has-overlay").animate({opacity:0}, 1500)

    })
    $("#about_pic").mouseenter(function() {

      $(".square").animate({opacity:0}, 1500)
      $(".has-overlay").animate({opacity:0}, 1500)

    })
  /*  $(".square").animate({opacity:0}, 1500)
    $(".has-overlay").animate({opacity:0}, 1500)*/
  })




});
