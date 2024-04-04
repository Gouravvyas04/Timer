let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let restart = document.querySelector(".restart");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let s, m, h;
let interval;

start.addEventListener("click", function () {
  clearInterval(interval);
  starttime();
});

stop.addEventListener("click", function () {
  console.log("close");
  clearInterval(interval);
  s = 0;
  m = 0;
  h = 0;
});

restart.addEventListener("click", function () {
  clearInterval(interval);
  seconds.textContent = "00";
  minutes.textContent = "00:";
  hours.textContent = "00:";
  (s = 0), (m = 0), (h = 0);
  starttime();
});

function starttime() {
  s = 0;
  interval = setInterval(function () {
    s++;
    seconds.textContent = s;
    if (s <= 10) {
      s.textContent = "0" + s;
    }
    if (s === 60) {
      m++;
      s = 0;
      if (m <= 10) {
        minutes.textContent = "0" + m;
      }
      minutes.textContent = m;
    }
    if (m === 60) {
      h++;
      m = 0;
      if (h <= 10) {
        hours.textContent = "0" + h;
      }
      hours.textContent = h;
    }
  }, 1000);
}
