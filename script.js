const audio = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playPauseIcon = document.getElementById("playPauseIcon");

const playPath = `<path d="M8 5v14l11-7z"></path>`;
const pausePath = `<path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z"></path>`;

const tracks = [
  "mp3's/You'll See It.mp3",
  "mp3's/Washed Out - You And I.mp3",
  "mp3's/SKRILLEX - ALL I ASK OF YOU (FEAT PENNY).mp3",
  "mp3's/Skrillex - Summit (feat. Ellie Goulding) [Video by Pilerats].mp3",
];

let currentTrack = 0;

function updatePlayIcon(isPlaying) {
  playPauseIcon.innerHTML = isPlaying ? pausePath : playPath;
}

function loadTrack(index) {
  audio.src = tracks[index];
  audio.load();
  audio.play().then(() => {
    updatePlayIcon(true);
  }).catch(err => {
    console.warn("Autoplay blocked:", err);
    updatePlayIcon(false);
  });
}

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    updatePlayIcon(true);
  } else {
    audio.pause();
    updatePlayIcon(false);
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

function checkPassword() {
  const input = document.getElementById("site-password").value;
  const correctPassword = "Molly42069"; // 🔒

  if (input === correctPassword) {
    unlockSite();
  } else {
    document.getElementById("password-error").textContent = "Wrong password.";
  }
}

function unlockSite() {
  const overlay = document.getElementById("password-overlay");
  if (overlay) {
    overlay.style.display = "none";
    document.body.style.overflow = ""; // re-enable scroll
    loadTrack(currentTrack);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden";
});
