const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submitCaptcha");

// Generate random math question
const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
const correctAnswer = num1 + num2;

questionEl.textContent = `What is ${num1} + ${num2}?`;

// Check answer
submitBtn.addEventListener("click", () => {
    const userAnswer = parseInt(answerInput.value);

    if (userAnswer === correctAnswer) {
        alert("Captcha passed... but too bad 😘");
        window.location.href = "index.html";
    } else {
        alert("Wrong answer! Try again 😏");
    }
});


// ❤️ Floating hearts (same effect as main page)
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);
