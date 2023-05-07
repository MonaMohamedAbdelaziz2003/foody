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
    /////////////////////menu
var div1 = document.getElementById("div1_header");

function xx() {
    if (navbar.style.height == "82px") {
        navbar.style.height = "250px";
        div1.classList.add("border");

    } else {
        navbar.style.height = "82px"
        div1.classList.remove("border");
    }

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