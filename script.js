player = document.getElementById("video");
btnPlayPause = document.getElementById("btnPlayPause");
player.addEventListener(
  "play",
  function () {
    changeButtonType(btnPlayPause, "Pause");
  },
  false
);
player.addEventListener(
  "pause",
  function () {
    changeButtonType(btnPlayPause, "Play");
  },
  false
);
function playPauseVideo() {
  if (player.paused || player.ended) {
    changeButtonType(btnPlayPause, "pause");
    player.play();
  } else {
    changeButtonType(btnPlayPause, "play");
    player.pause();
  }
}

function changeButtonType(btn, value) {
  btn.title = value;
  btn.innerHTML = value;
}
function changeTitle() {
  document.getElementById("myList").innerHTML = "Added";
}
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.classList.add("nav_black");
  } else {
    nav.classList.remove("nav_black");
  }
});
