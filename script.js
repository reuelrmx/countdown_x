// Countdown Timer
function updateCountdown() {
    const countDownDate = new Date("August 26, 2024 08:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    document.getElementById("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").textContent = Math.floor((distance % (1000 * 60)) / 1000);
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Theme Toggle
const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeButton.innerHTML = document.body.classList.contains("light-mode") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Motivational Quotes
const quotes = [
    "The harder you work, the luckier you get.",
    "Success is the sum of small efforts, repeated daily.",
    "Believe in yourself and all that you are.",
    "Don't watch the clock; do what it does. Keep going.",
    "Every day is a new opportunity to be better.",
    "You are capable of more than you know.",
    "Your future is created by what you do today, not tomorrow.",
    "Stay focused and never give up.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Do something today that your future self will thank you for."
];

function updateQuote() {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[quoteIndex];
}

updateQuote();
setInterval(updateQuote, 8 * 60 * 60 * 1000); // Change every 8 hours

// Study Progress Tracking
let progress = 20; // Example value, replace with real data
document.getElementById("progress-fill").style.width = progress + "%";
document.getElementById("progress-text").textContent = progress + "%";
