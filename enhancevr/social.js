var socialBox = document.getElementsByClassName("social-box");
var socialModal = document.getElementsByClassName("social-modal");
var span = document.getElementsByClassName("close");

for (let i = 0; i < 6; i++) {
    socialBox[i].onclick = function () {
        socialModal[i].style.display = "block";
    };
    span[i].onclick = function () {
        socialModal[i].style.display = "none";
    };
}
window.onclick = function (event) {
    for (let i = 0; i < 6; i++) {
        if (event.target == socialModal[i]) {
            this.socialModal[i].style.display = "none";
        }
    }
};
