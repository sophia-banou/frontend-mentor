$(document).ready(function() {
    $(".faq-box-head").on("click", function() {
        $(this).siblings(".faq-box-body").slideToggle(20);
        var attr = $(this).children(".pl-min-icon").attr("src");
        if(attr === "assets/images/icon-plus.svg") {
            $(this).children(".pl-min-icon").attr("src","assets/images/icon-minus.svg");
        } else {
            $(this).children(".pl-min-icon").attr("src","assets/images/icon-plus.svg");
        }
    })
}) 

