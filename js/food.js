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
var navbar = document.getElementById("nav2");
var sticky = navbar.offsetTop;
var arrow = document.getElementById("arrow");
if (window.location.pathname == "/index.html") {

    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("fixed");
            navbar.style.backgroundColor = "white";
        } else {
            navbar.classList.remove("fixed")
            navbar.style.backgroundColor = "#3bb81500";
        }
        if (window.scrollY >= 1200) {
            arrow.style.opacity = 1;
        } else {
            arrow.style.opacity = 0;
        }
    }
    arrow.onclick = function x() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        /////////////bootstrap
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
}
/////////////////////menu

function xx() {
    var div1 = document.getElementById("div1_header");

    div1.classList.toggle("border");
    navbar.classList.toggle("add_nav2");

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