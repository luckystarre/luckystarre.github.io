var openBtn = document.getElementById("open-btn");
var overlay = document.getElementById("overlay");
var closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
});
