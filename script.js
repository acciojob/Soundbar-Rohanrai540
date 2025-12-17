//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.querySelectorAll(".btn");

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

sounds.forEach(sound => {
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("stop")) {
      stopSounds();
    } else {
      stopSounds();
      const sound = button.innerText;
      document.getElementById(sound).play();
    }
  });
});