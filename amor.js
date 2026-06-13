const photos = document.querySelectorAll(".photo");

window.addEventListener("scroll", () => {
    photos.forEach((photo, index) => {

        const rect = photo.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visible = rect.top / windowHeight;

        const speed = (index + 1) * 0.5;
        photo.style.transform = `translateY(${visible * speed}px)`;
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    hiddenElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
    
        if (elementTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

const text = "O futuro é incerto, mas com você ao meu lado, sinto que podemos enfrentar qualquer coisa. Estou ansioso para continuar construindo nossa história juntos, ter nosso lar, nossa família, nossas viagens e tudo que almejamos. Se Deus nos permitir!! Eu te amo infinitamente.💕";

const typingElement = document.getElementById("typing-text");

let index = 0;
let isTypingStarted = false;

function typeText() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 40);
    }
}

window.addEventListener("scroll", () => {
    if (!typingElement) return;

    const rect = typingElement.getBoundingClientRect().top;

    if (rect < window.innerHeight * 0.8 && !isTypingStarted) {
        isTypingStarted = true;
        typeText();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️, 💖, 💕, 💘, 💝".split(", ")[Math.floor(Math.random() * 5)];

    //posição aleatória do coração
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = Math.random() * 20 + "px";

    //Tamanho aleatório do coração
    heart.style.fontSize = Math.random() * 20 + 30 + "px";

    document.body.appendChild(heart);

    //Remove o coração depois da animação
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

//Cria um coração a cada 300ms
setInterval(createHeart, 300);

//Corações de fundo
const container = document.getElementById("bg-hearts");

for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("bg-heart");

    heart.innerHTML = "❤️, 💖, 💕, 💘, 💝".split(", ")[Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.opacity = Math.random() * 0.30 + 0.15;

    container.appendChild(heart);
}

//Efeito scroll para fundo
const bgHearts = document.querySelectorAll(".bg-heart");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    bgHearts.forEach((heart, index) => {
        const speed = 0.05 + (index * 0.01);
        heart.style.transform = `translateY(${-scroll * speed}px)`;
    });
});