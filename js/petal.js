const petalContainer = document.getElementById("petal");
const petalCount = 20; // 벚꽃 이미지 개수
const petalDelay = 3000; // 벚꽃 이미지가 떨어지는 간격 (밀리초)

for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petalContainer.appendChild(petal);
}

setInterval(function () {
    const petals = document.querySelectorAll(".petal");
    petals.forEach(function (petal) {
        const random = Math.random();
        const speed = (random * 1) + 0.5;
        const rotation = Math.floor(random * 360);
        petal.style.animation = `drift ${speed}s linear infinite`;
        petal.style.transform = `rotate(${rotation}deg)`;
    });
}, petalDelay);
