const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const greetingEl = document.getElementById("greeting");

function updateClock() {

const now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

let ampm = "AM";
let greeting = "";

/* Greeting Message */

if (h < 12) {
greeting = "Good Morning ☀️";
}
else if (h < 18) {
greeting = "Good Afternoon 🌤️";
}
else {
greeting = "Good Evening 🌙";
}

greetingEl.innerText = greeting;

/* AM PM */

if (h >= 12) {
ampm = "PM";
}

if (h > 12) {
h = h - 12;
}

/* Add Zero */

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

/* Time */

hourEl.innerText = h;
minuteEl.innerText = m;
secondEl.innerText = s;
ampmEl.innerText = ampm;

/* Date */

const options = {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric"
};

dateEl.innerText = now.toLocaleDateString(undefined, options);

setTimeout(updateClock, 1000);

}

updateClock();