
const heartLayer = document.getElementById("heart-layer");

const hearts = ["♡", "♥", "💕", "💗", "✨"];

function createHeart() {
    if (!heartLayer) return;

    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.setProperty("--left", `${Math.random() * 96}%`);
    heart.style.setProperty("--size", `${14 + Math.random() * 17}px`);
    heart.style.setProperty("--duration", `${8 + Math.random() * 7}s`);
    heart.style.setProperty("--delay", `${Math.random() * 2}s`);

    heartLayer.appendChild(heart);

    // Remove old hearts to keep the page lightweight
    window.setTimeout(() => heart.remove(), 18000);
}

// Create a gentle stream of floating hearts
for (let i = 0; i < 12; i++) {
    window.setTimeout(createHeart, i * 350);
}

window.setInterval(createHeart, 850);

// Love letter popup
const openButton = document.getElementById("letter-button");
const modal = document.getElementById("letter-modal");
const closeButton = document.getElementById("close-letter");
const closeBottomButton =
    document.getElementById("close-letter-bottom");

function openLetter() {
    if (!modal) return;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    closeButton?.focus();
}

function closeLetter() {
    if (!modal) return;

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    openButton?.focus();
}

openButton?.addEventListener("click", openLetter);
closeButton?.addEventListener("click", closeLetter);
closeBottomButton?.addEventListener("click", closeLetter);

// Close popup by clicking outside the letter
modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeLetter();
    }
});

// Escape key closes the popup
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("show")) {
        closeLetter();
    }
});



const birthdayJokes = [
    "Birthday rule #1: Cake share karna optional hai. 🎂",
    "Age is just a number... but cake slices are unlimited. 😂",
    "Birthday queen detected. Compliments must be submitted immediately. 👑",
    "Today's workout: blowing candles and opening gifts. 💅",
    "May your selfies be perfect and your cake be extra large. 📸",
    "Breaking news: World's cutest birthday girl demands more cake! 🚨🎂",
    "Birthday mood: 1% battery, 100% birthday attitude. 🔋😂",
    "Official birthday policy: no stress, only cake and compliments. 💗"
];

const jokeButton = document.getElementById("birthday-joke-button");
const jokeResult = document.getElementById("birthday-joke-result");

if (jokeButton && jokeResult) {
    jokeButton.addEventListener("click", () => {
        const currentJoke = jokeResult.textContent;
        let nextJoke;

        do {
            nextJoke =
                birthdayJokes[
                    Math.floor(Math.random() * birthdayJokes.length)
                ];
        } while (
            birthdayJokes.length > 1 &&
            nextJoke === currentJoke
        );

        jokeResult.textContent = nextJoke;
    });
}

