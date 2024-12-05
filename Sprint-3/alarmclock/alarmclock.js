
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

// Variable to keep track of the countdown timer
let countdownInterval;
let remainingTime = 0;

// Function to format time in MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to set the alarm
function setAlarm() {
  const inputField = document.getElementById("alarmSet");
  remainingTime = parseInt(inputField.value, 10);

  if (isNaN(remainingTime) || remainingTime <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  const timeRemaining = document.getElementById("timeRemaining");
  timeRemaining.innerText = `Time Remaining: ${formatTime(remainingTime)}`;

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    remainingTime--;

    if (remainingTime >= 0) {
      timeRemaining.innerText = `Time Remaining: ${formatTime(remainingTime)}`;
    }

    if (remainingTime === 0) {
      playAlarm();
      clearInterval(countdownInterval);
      flashBackground();
    }
  }, 1000);
}

// Function to stop the alarm
function pauseAlarm() {
  clearInterval(countdownInterval);
  audio.pause();
}

// Optional: Flash background when time is up
function flashBackground() {
  const body = document.body;
  let isFlashing = false;

  const flashInterval = setInterval(() => {
    body.style.backgroundColor = isFlashing ? "#fff" : "#ff6666";
    isFlashing = !isFlashing;
  }, 500);

  setTimeout(() => {
    clearInterval(flashInterval);
    body.style.backgroundColor = "";
  }, 5000);
}

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
