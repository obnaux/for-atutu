
document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     ANNIVERSARY + VALENTINE
     ===================== */
function getDHMS(from, to) {
  let diff = to - from;

  if (diff <= 0) {
    return { done: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= (1000 * 60 * 60);

  const seconds = Math.floor(diff / 1000);

  return { days, hours, seconds, done: false };
}



const anniversaryEl = document.getElementById("anniversary-countdown");

if (anniversaryEl) {
function updateAnniversary() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 8, 5, 0, 0, 0);

  if (now > target) {
    target = new Date(now.getFullYear() + 1, 8, 5, 0, 0, 0);
  }

  const t = getDHMS(now, target);

  if (t.done) {
    anniversaryEl.textContent = "TODAY 💖";
    anniversaryEl.className = "countdown-timer today";
    return;
  }

  let text = `${t.days} days `;
  if (t.hours > 0) text += `${t.hours} hrs `;
  text += `${t.seconds} secs 💖`;

  anniversaryEl.textContent = text;

  anniversaryEl.classList.add("tick");
  setTimeout(() => anniversaryEl.classList.remove("tick"), 200);

  if (t.days < 10) {
    anniversaryEl.classList.add("soon");
  }
}


  updateAnniversary();
  setInterval(updateAnniversary, 1000);
}

const valentinesEl = document.getElementById("valentines-countdown");

if (valentinesEl) {
  function updateValentines() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 1, 14, 0, 0, 0);

  if (now > target) {
    target = new Date(now.getFullYear() + 1, 1, 14, 0, 0, 0);
  }

  const t = getDHMS(now, target);

  if (t.done) {
    valentinesEl.textContent = "TODAY 💘";
    valentinesEl.className = "countdown-timer today";
    return;
  }

  let text = `${t.days} days `;
  if (t.hours > 0) text += `${t.hours} hrs `;
  text += `${t.seconds} secs 💕`;

  valentinesEl.textContent = text;

  valentinesEl.classList.add("tick");
  setTimeout(() => valentinesEl.classList.remove("tick"), 200);

  if (t.days < 10) {
    valentinesEl.classList.add("soon");
  }
}


  updateValentines();
  setInterval(updateValentines, 1000);
}


  /* =====================
     FLOATING HEARTS (SAFE)
     ===================== */
  const heartsContainer = document.querySelector(".hearts-container");

  if (heartsContainer) {
    setInterval(() => {
      const heart = document.createElement("span");
      heart.textContent = "💖";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.position = "absolute";
      heart.style.bottom = "0";
      heart.style.animation = "floatUp 6s linear";
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 700);
  }

  /* =====================
     DANCE UNLOCK
     ===================== */
window.unlockDance = function () {
  const answer = prompt("Only Atutu allowed 😌💖");

  if (answer && answer.toLowerCase().includes("gappu")) {
    const lockBox = document.getElementById("lock-box");
    const danceContent = document.getElementById("dance-content");

    if (lockBox) lockBox.style.display = "none";
    if (danceContent) danceContent.style.display = "block";
  } else {
    alert("Hmm… close 😌💕");
  }
};




});

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  if (!music) return;

  music.volume = 0.5;

  const startMusic = () => {
    music.play().catch(() => {});
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
  };

  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic);
});


