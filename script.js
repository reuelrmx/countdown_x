// Theme Toggle
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;
const themeLabel = document.getElementById("theme-label");

function loadTheme() {
    const theme = localStorage.getItem("theme") || "dark";
    body.className = theme + "-mode";
    themeSwitch.checked = theme === "light";
    themeLabel.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
}

themeSwitch.addEventListener("change", () => {
    const theme = themeSwitch.checked ? "light" : "dark";
    body.className = theme + "-mode";
    localStorage.setItem("theme", theme);
    themeLabel.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
});

loadTheme();

// Countdown Timer
function updateCountdown() {
    let examDate = localStorage.getItem("examDate") || new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0];
    document.getElementById("exam-date").value = examDate;
    let countDownDate = new Date(examDate).getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;

    document.getElementById("days").textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").textContent = Math.floor((distance % (1000 * 60)) / 1000);
}

function setExam() {
    let examDate = document.getElementById("exam-date").value;
    localStorage.setItem("examDate", examDate);
    updateCountdown();
}

// Study Reminder
function setReminder() {
    let reminderTime = document.getElementById("reminder-time").value;
    localStorage.setItem("reminderTime", reminderTime);
    document.getElementById("reminder-msg").textContent = "Reminder set for " + reminderTime;
}

// Motivational Quotes
const quotes = [
    "Success is not final, failure is not fatal.",
    "Push yourself, because no one else will do it for you.",
    "Dream big, work hard, stay focused.",
    "Every expert was once a beginner."
];

function showQuote() {
    let index = Math.floor(Date.now() / (8 * 60 * 60 * 1000)) % quotes.length;
    document.getElementById("quote").textContent = quotes[index];
}

// Progress Tracking
let totalHours = parseInt(localStorage.getItem("studyHours")) || 0;

function logStudy() {
    let hours = parseInt(document.getElementById("study-hours").value) || 0;
    totalHours += hours;
    localStorage.setItem("studyHours", totalHours);
    updateProgress();
}

function updateProgress() {
    let progress = Math.min(100, (totalHours / 50) * 100);
    document.getElementById("progress").textContent = `${progress.toFixed(1)}%`;
    document.getElementById("progress-bar").value = progress;
}

// Daily Challenges
const challenges = [
    "Revise one past topic.", "Write 5 key points.", "Solve 5 practice questions."
];

function newChallenge() {
    document.getElementById("challenge").textContent = challenges[new Date().getDate() % challenges.length];
}

// Run Functions on Load
setInterval(updateCountdown, 1000);
updateCountdown();
showQuote();
updateProgress();
newChallenge();
