// slider
if (Modernizr.touch) {
    $(".carousel").swipe({
        swipe: function(
            event,
            direction,
            distance,
            duration,
            fingerCount,
            fingerData
        ) {
            if (direction == "left") $(this).carousel("next");
            if (direction == "right") $(this).carousel("prev");
        },
        allowPageScroll: "vertical"
    });
} else {
    $(".alert").removeClass("hidden");
}
//arw
var navbar = document.getElementsByClassName("nav1");
var sticky = navbar.offsetTop;
var arrow = document.getElementById("arrow");
console.log(navbar)
if (window.location.pathname == "/index.html") {

    // window.onscroll = function() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("fixed");
    //         navbar.style.backgroundColor = "white";
    //     } else {
    //         navbar.classList.remove("fixed")
    //         navbar.style.backgroundColor = "#3bb81500";
    //     }
    //     if (window.scrollY >= 1200) {
    //         arrow.style.opacity = 1;
    //     } else {
    //         arrow.style.opacity = 0;
    //     }
    // }
    // arrow.onclick = function x() {
    //         window.scrollTo({ top: 0, behavior: "smooth" });
    //     }
    /////////////bootstrap

}
$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    /////////////////////menu

function xx(x, y) {
    var div1 = document.getElementById(x);
    var navbarr = document.getElementById(y);
    div1.classList.toggle("border");
    navbarr.classList.toggle("add_nav2");
    // console.log(div1, "hi", navbarr)
}

/////////////bootstrap
// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel();
// });

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// })