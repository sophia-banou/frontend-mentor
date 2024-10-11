$(document).ready(function() {
    $(".rating .icon-circle").on("click", function() {
        $(this).addClass("active");
        $(".rating .icon-circle").not(this).removeClass("active");
    });

    $("#rating-page .box--ratings .rating-form .submit-button").on("click", function() {

        var ratings =$(".rating .icon-circle.active");
        console.log(ratings)
        if(ratings.length === 0) {
            alert("You haven't selected a rating!")
        } else {

            var selectedRating = $(".rating .icon-circle.active").parent().data("value");
            $("#thank-you-page .ty-box--top .selected-div p #selected-no").text(selectedRating);
            
            $("#rating-page").hide();
            $("#thank-you-page").show();
        }
        
    })
})