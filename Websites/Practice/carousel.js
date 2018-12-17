$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({
        interval: 2000,
        pause: "hover"
    });

    // Animate CSS JS Function
    $("#myCarousel").on("slide.bs.carousel", function() {
      if ($(".carousel-inner .item:last").hasClass("active")) {
        $(".carousel-inner .item:first").addClass("animated fadeIn");
      } else {
        $(".item.active").next().addClass("animated fadeIn");
      }
      $(".item.active").addClass("animated fadeOut");
    });

    $("#myCarousel").on("slid.bs.carousel", function() {
      $(".item").removeClass("animated fadeIn fadeOut")
    });

    // Left and Right Buttons
    $(".left").click(function() {
      $("#myCarousel").carousel("prev");
      if ($(".carousel-inner .item:first").hasClass("active")) {
        $(".carousel-inner .item:last").addClass("animated fadeIn");
      } else {
        $(".item.active").prev().addClass("animated fadeIn");
      }
    });

    $(".right").click(function() {
      $("#myCarousel").carousel("next");
      if ($(".carousel-inner .item:first").hasClass("active")) {
        $(".carousel-inner .item:last").addClass("animated fadeIn");
      } else {
        $(".item.active").prev().addClass("animated fadeIn");
      }
    });

    // Enable Carousel Indicators
    $(".carousel-indicators > li").click(function() {
      $(".item").addClass("animated fadeIn");
    });

});
