var demo2 = document.getElementById("demo2");
var demo3 = document.getElementById("demo3");
var demo6 = document.getElementById("demo6");
var demo7 = document.getElementById("demo7");
var demo8 = document.getElementById("demo8");
var demo9 = document.getElementById("demo9");

function demoAppear() {
    if (demo2.getBoundingClientRect().top < window.innerHeight - 150) {
        demo2.classList.add("enter-animation");
    }
    if (demo3.getBoundingClientRect().top < window.innerHeight - 150) {
        demo3.classList.add("enter-animation");
    }
    if (demo6.getBoundingClientRect().top < window.innerHeight - 150) {
        demo6.classList.add("enter-animation");
    }

    if (demo7.getBoundingClientRect().top < window.innerHeight - 150) {
        demo7.classList.add("enter-animation");
    }
    if (demo8.getBoundingClientRect().top < window.innerHeight - 150) {
        demo8.classList.add("enter-animation");
    }
    if (demo9.getBoundingClientRect().top < window.innerHeight - 150) {
        demo9.classList.add("enter-animation");
    }
}

window.addEventListener("scroll", demoAppear);
