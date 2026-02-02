const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move NO button when hovered or touched
function moveButton() {
    const container = document.querySelector(".buttons");
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Works for mouse
noBtn.addEventListener("mouseover", moveButton);

// Works for mobile touch
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moveButton();
});

// YES button goes to new page
yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
});
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}
// If she actually clicks NO, send to captcha page
noBtn.addEventListener("click", () => {
    window.location.href = "captcha.html";
});


// Create hearts continuously
setInterval(createHeart, 300);
