const clock = document.querySelector("#clock");

function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const dateString = `${year}년 ${month}월 ${day}일`;
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.querySelector("#date").innerText = dateString;
    document.querySelector("#time").innerText = timeString;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}