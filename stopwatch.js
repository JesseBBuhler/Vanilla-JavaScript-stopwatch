let time = 0;
let running = false;
let justTicked = false;

function tick() {
  if (!justTicked) {
    justTicked = true;
    setTimeout(() => {
      justTicked = false;
      if (running) {
        time += 1;
        printTime();
        tick();
      }
    }, 1000);
  }
}

function printTime() {
  document.getElementById("clock").innerHTML = `${Math.floor(time / 60)}:${
    Math.floor(time % 60) < 10 ? "0" : ""
  }${Math.floor(time % 60)}`;
}

function start() {
  running = true;
  tick();
}

function stop() {
  running = false;
}

function reset() {
  time = 0;
  running = false;
  printTime();
}
