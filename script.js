
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

const smileBtn = document.getElementById("smileBtn");
const smileMessage = document.getElementById("smileMessage");

const heartsContainer = document.getElementById("hearts");

// Letter open / close
openLetter.addEventListener("click", () => {
  const isHidden = letter.classList.contains("hidden");

  letter.classList.toggle("hidden");

  openLetter.textContent = isHidden
    ? "Close the little letter 💗"
    : "Open your little surprise 💌";

  if (isHidden) {
    letter.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});

// Smile button
smileBtn.addEventListener("click", () => {
  smileMessage.classList.remove("hidden");
  smileBtn.textContent = "A smile just for you 💖";
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";
  heart.style.opacity = (0.3 + Math.random() * 0.5).toString();

  const duration = 6 + Math.random() * 6;
  heart.style.animationDuration = duration + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Har 700 milliseconds mein ek heart
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

if (!reduceMotion.matches) {
  setInterval(createHeart, 700);
}
