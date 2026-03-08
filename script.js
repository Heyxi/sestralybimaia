const wishes = [
    "Море путешествий и крутых фоток! ✈️",
    "Пусть шопинг всегда будет удачным! 🛍️",
    "Бесконечного запаса вдохновения и идей! 💡",
    "Будь первой во всём, за что берешься! 🏆",
    "Миллион сторис с искренней улыбкой! 📸",
    "Пусть рядом всегда будут верные люди! 🙌"
];

const btn = document.getElementById('wish-btn');
const wishDisplay = document.getElementById('dynamic-wish');

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    wishDisplay.style.opacity = 0;
    
    setTimeout(() => {
        wishDisplay.innerText = wishes[randomIndex];
        wishDisplay.style.opacity = 1;
        wishDisplay.style.transition = 'opacity 0.5s';
    }, 200);
});

function createPetal() {
    const container = document.getElementById('petals-container');
    if (!container) return;
    const petal = document.createElement('div');
    const size = Math.random() * 15 + 10 + 'px';
    
    petal.classList.add('petal');
    petal.style.width = size;
    petal.style.height = size;
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 5 + 5 + 's';
    petal.style.opacity = Math.random() * 0.5 + 0.3;
    
    container.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 300);
