const chat = document.getElementById("chatBox");
const scene = document.getElementById("scene");
const heartContainer = document.getElementById("heartContainer");
const message = document.getElementById("message");

chat.addEventListener("click", startAnimation);

function startAnimation() {
  chat.style.display = "none";
  scene.style.display = "block";
  createHeart();
}

function createHeart() {
  heartContainer.innerHTML = "";

  const centerX = 200;
  const centerY = 400;
  const scale = 40;

  const colors = ["#ff4d6d", "#ff85b3", "#ff1e56", "#ff99cc"];

  const points = [];

  // Fórmula matemática del corazón
  for (let t = 0; t < Math.PI * 2; t += 0.22) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    points.push({ x, y });
  }

  points.forEach((p, index) => {
    const heart = document.createElement("div");
    heart.classList.add("mini-heart");

    const px = centerX + p.x * scale / 20;
    const py = centerY + p.y * scale / 20;

    heart.style.left = `${px}px`;
    heart.style.top = `${py}px`;

    const color = colors[index % colors.length];
    heart.style.background = color;
    heart.style.animationDelay = `${index * 0.04}s`;

    heartContainer.appendChild(heart);
  });

  setTimeout(showMessage, 2200);
}

function showMessage() {
  message.classList.add("show");
}

function restart() {
  message.classList.remove("show");
  scene.style.display = "none";
  chat.style.display = "block";
}
