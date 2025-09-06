const timings = document.getElementsByClassName("timings")[0];

function showCurrentTime() {
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes().toString().padStart(2, "0");
    let currentSeconds = now.getSeconds().toString().padStart(2, "0");

    let time = `${currentHour} : ${currentMinute} : ${currentSeconds}`;

    timings.innerText = time;
}

setInterval(showCurrentTime, 1000);

