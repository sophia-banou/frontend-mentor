$(document).ready(function () {
  $("#email_form").on({
    submit: function (e) {

      var userinput = $(this).find("input").val();
      var pattern = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      if (!pattern.test(userinput)) {
        e.preventDefault();
        $(this).find("input").addClass("error");
        $("#email_error").css("opacity", "1")
      } else {
        $(this).find("input").removeClass("error");
        $("#email_error").css("opacity", "0")
        this.reset();
      }
    }
  });

  $(".social_div a").on({
    mouseenter: function() {
        var path = $(this).find("img").attr("src");
        var newPath = path.replace(/\.svg$/, "-active.svg");
        $(this).find("img").attr("src",newPath);
    },
    mouseleave: function() {
        var path = $(this).find("img").attr("src");
        var newPath = path.replace(/\-active.svg$/, ".svg");
        $(this).find("img").attr("src",newPath);
    }
  })
});
