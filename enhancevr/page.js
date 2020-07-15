window.onscroll = function () {
    stickyFunc();
};

var headerbar = document.getElementById("header-bar");
var sticky = headerbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunc() {
    if (window.pageYOffset >= sticky + 10) {
        headerbar.classList.add("sticky");
    } else {
        headerbar.classList.remove("sticky");
    }
}
