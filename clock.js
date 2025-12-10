const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`

    const min = now.getMinutes();
    const minsDeg = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDeg}deg)`;

    const hour = now.getMinutes();
    const hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);