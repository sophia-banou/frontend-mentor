$(document).ready(function() {
    $("#share-button").on({
        "click": function(e) {
            e.preventDefault();
            var popup = $(".share-popup");
            var image = $(this).find("a picture img")
            if(popup.hasClass("hidden")) {
                $(".share-popup").removeClass("hidden");
                image.attr("src", "images/icon-share-active.svg");
                $(this).css("background-color", "var(--desaturated-dark-blue)")
            } else {
                $(".share-popup").addClass("hidden");
                image.attr("src", "images/icon-share.svg");
                $(this).css("background-color", "var(--light-grayish-blue)")
            }
            
        }
    })
})