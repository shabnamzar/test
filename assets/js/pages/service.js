var playPause = document.getElementById("btnvideo");
var playPause_i = document.querySelector("#btnvideo i");
var vid = document.querySelector(".videoBox video");
if (typeof playPause !== "undefined") {
    playPause.addEventListener(
        "click",
        function (e) {
            var t1 = document.querySelector("#btnvideo");
            var media = document.querySelector(".media");
            e.preventDefault();
            if (!vid.paused) {
                playPause.classList.add("colored");
                playPause_i.classList.add("fa-play-circle");
                playPause_i.classList.remove("fa-pause-circle");
                vid.removeAttribute("controls");
                vid.pause();
            } else {
                playPause.classList.remove("colored");
                playPause_i.classList.remove("fa-play-circle");
                playPause_i.classList.add("fa-pause-circle");
                vid.setAttribute("controls", "");
                vid.play();
            }
            return false;
        },
        true
    );
}
function setWidthVideo() {
    var width = $("video").css("width");
    if (typeof width !== "undefined") {
        $("#btnvideo").css("width", width);
    }
}
$(document).ready(function () {
    setWidthVideo();
});
$(window).resize(function () {
    setWidthVideo();
});
