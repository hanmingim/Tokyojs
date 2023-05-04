const images = [
    "1.gif",
    "2.gif",
    "3.gif",
    "4.gif",
    "5.gif",
    "6.gif",
    "7.gif",
    "8.gif",
    "9.gif",
    "10.gif",
    "11.gif"
];

const chosenimage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenimage}')`;
document.body.style.backgroundSize = "cover";

const bgImage = new Image(); // bgImage 변수 선언해줌

bgImage.onload = function () { // 이미지 로드가 완료된 후 배경 이미지로 설정
    document.body.style.backgroundImage = `url('img/${chosenimage}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
};

bgImage.src = `img/${chosenimage}`;
document.body.appendChild(bgImage);