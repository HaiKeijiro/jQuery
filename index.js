$("button").click(function() {
    $("h1").css("color", "purple");
});

// Cara lebih flesibelnya daripada pake click atau keypress pakenya "on"
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});

// Versi vanillanya
/*
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}
*/

// Deteksi input
// Check di console.log

// $("input").keypress(function(event) {
//     console.log(event.key);
// });
// bisa juga pake "body" atau document, tapi document itu selectnya satu document full yg artinya satu web page

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

// Adding elements
// before, after, prepend, append
// source: vid jQuery 183.


// Cara keren hide elemen (with animation)
// hide - show (toggle), fadeOut - fadeIn (fadeToggle), slideUp - slideDown (slideToggle), animate (with css)

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({margin: "20%"});
});