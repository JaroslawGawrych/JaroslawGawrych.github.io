document.getElementById("yesButton1").addEventListener("click", function() {
    document.getElementById("image").src = "yippie_cat.gif";
    document.getElementById("header").innerText = "YIPPIE!\nKocham Cię!";
    document.getElementById("container").style.backgroundImage = "url('fireworks.gif')";
    document.getElementById("buttons1").style.display = "none";
});

document.getElementById("noButton1").addEventListener("click", function() {
    document.getElementById("image").src = "angry_hamster.png";
    document.getElementById("header").innerText = "Jesteś pewna?";
    document.getElementById("buttons1").style.display = "none";
    document.getElementById("buttons2").style.display = "flex";
});

document.getElementById("noButton2").addEventListener("click", function() {
    document.getElementById("image").src = "coquette_sad_hamster.jpg";
    document.getElementById("header").innerText = "Zostaniesz moją walentynką?";
    document.getElementById("buttons2").style.display = "none";
    document.getElementById("buttons1").style.display = "flex";
});

const area = document.getElementById("heheh");

let x = 0;
let y = 0;
let lastX = null;
let lastY = null;

area.addEventListener("mousemove", (e) => {
    if (lastX === null) {
        lastX = e.clientX;
        lastY = e.clientY;
        return;
    }

    const rect = area.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = centerX - e.clientX;
    const dy = centerY - e.clientY;

    const distance = Math.sqrt(dx * dx + dy * dy) || 1;


    x += (dx / distance) * 10;
    y += (dy / distance) * 10;

    area.style.transform = `translate(${x}px, ${y}px)`;

    lastX = e.clientX;
    lastY = e.clientY;
});