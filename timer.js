let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let restart = document.querySelector(".restart");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let s = 0,
  m = 0,
  h = 0;
let interval;

start.addEventListener("click", function () {
  clearInterval(interval);
  starttime();
});

stop.addEventListener("click", function () {
  clearInterval(interval);
});
//Restart button
restart.addEventListener("click", function () {
  clearInterval(interval);
  seconds.textContent = "00";
  minutes.textContent = "00:";
  hours.textContent = "00:";
  s = 0;
  m = 0;
  h = 0;
  starttime();
});

function starttime() {
  interval = setInterval(function () {
    s++;
    if (s < 10) {
      seconds.textContent = "0" + s;
    } else {
      seconds.textContent = s;
    }

    if (s === 60) {
      m++;
      s = 0;
      if (m < 10) {
        minutes.textContent = "0" + m + ":";
      } else {
        minutes.textContent = m + ":";
      }
    }

    if (m === 60) {
      h++;
      m = 0;
      if (h < 10) {
        hours.textContent = "0" + h + ":";
      } else {
        hours.textContent = h + ":";
      }
    }
  }, 1000);
}
