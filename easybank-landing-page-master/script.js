$(document).ready(function () {
  $(".nav-div a").on({
    mouseenter: function () {
      $(this).find(".hover-line").css("opacity", "1");
    },
    mouseleave: function () {
      $(this).find(".hover-line").css("opacity", "0");
    },
  });

  $(".hamburger-div").on({
    click: function () {
      if (!$(".mobile-popup").hasClass(".active")) {
        $(".mobile-popup").addClass(".active");
        $(".mobile-popup").show();
        $(".mobile-overlay").show();
        $(".hamburger-div picture img").attr("src","images/icon-close.svg");
        $("body").css("position", "fixed");
      } else {
        $(".mobile-popup").removeClass(".active");
        $(".mobile-popup").hide();
        $(".mobile-overlay").hide();
        $(".hamburger-div picture img").attr("src","images/icon-hamburger.svg");
        $("body").css("position", "relative");
      }
    },
  });
});
