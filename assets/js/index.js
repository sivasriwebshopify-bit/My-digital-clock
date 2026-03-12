const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const timezoneEl = document.getElementById("timezone");

function updateClock() {

  const timezone = timezoneEl.value;

  const now = new Date().toLocaleString("en-US", { timeZone: timezone });
  const dateObj = new Date(now);

  let h = dateObj.getHours();
  let m = dateObj.getMinutes();
  let s = dateObj.getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    ampm = "PM";
  }

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  dateEl.innerText = dateObj.toLocaleDateString(undefined, options);

  setTimeout(updateClock, 1000);
}

updateClock();