const audio = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playPauseIcon = document.getElementById("playPauseIcon");

const tracks = [
  "mp3's/Skrillex - Summit (feat. Ellie Goulding) [Video by Pilerats].mp3",
];

let currentTrack = 0;

function loadTrack(index) {
  audio.src = tracks[index];
  audio.load();
  audio.play().catch(err => {
    console.warn("Autoplay blocked:", err); // in case browser blocks it
  });
  playPauseIcon.src = "images/icons/play.svg";
}

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseIcon.src = "images/icons/play.svg";
  } else {
    audio.pause();
    playPauseIcon.src = "images/icons/play.svg";
  }
});

prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
});

nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
});

audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
});

// Autoplay on initial page load
window.addEventListener("DOMContentLoaded", () => {
  loadTrack(currentTrack);
});
