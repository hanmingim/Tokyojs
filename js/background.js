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

bgImage.src = `img/${chosenimage}`;
bgImage.style.width = "100vw";
bgImage.style.height = "100vh";

document.body.appendChild(bgImage);
document.body.style.backgroundImage = "images";
document.body.style.backgroundSize = "cover";