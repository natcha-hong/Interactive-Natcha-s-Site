// FIREBALL CURSOR START

const coords = { x: 0, y: 0};
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ff180c",
  "#ff3900",
  "#ff5200",
  "#ff6800",
  "#ff7d00",
  "#ff9100",
  "#ffa400",
  "ffb800",
  "#ffca00",
  "#ffdc00",
  "#fdee00",
  "#f4ff28",
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

// FIREBALL CURSOR END


// HAMBUR MENU ON MOBILE START

let emptyArea = document.getElementById("emptyarea")
  , mobileTogglemenu = document.getElementById("mobiletogglemenu");
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling"),
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"),
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"),
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"),
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3")
}
function hidemenubyli() {
    document.body.classList.toggle("stopscrolling"),
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"),
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1"),
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2"),
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3")
}
const sections = document.querySelectorAll("section")
  , navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li")
  , mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");
window.addEventListener("scroll", () => {
    let e = "";
    sections.forEach(t => {
        let o = t.offsetTop;
        t.clientHeight,
        pageYOffset >= o - 200 && (e = t.getAttribute("id"))
    }
    ),
    mobilenavLi.forEach(t => {
        t.classList.remove("activeThismobiletab"),
        t.classList.contains(e) && t.classList.add("activeThismobiletab")
    }
    ),
    navLi.forEach(t => {
        t.classList.remove("activeThistab"),
        t.classList.contains(e) && t.classList.add("activeThistab")
    }
    )
}
)
// HAMBUR MENU ON MOBILE END


// BACK TO TOP BUTTON START

let mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
    document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none"
}
function scrolltoTopfunction() {
    document.body.scrollTop = 0,
    document.documentElement.scrollTop = 0
}
window.onscroll = function() {
    scrollFunction()
}

// BACK TO TOP BUTTON END
