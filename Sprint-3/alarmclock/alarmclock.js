function setAlarm() {
  // Get the input value and time display element
  const inputField = document.getElementById("alarmSet");
  const timeDisplay = document.getElementById("timeRemaining");

  // Get the time in seconds from the input
  let time = parseInt(inputField.value, 10);

  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid time in seconds!");
    return;
  }

  // Update the time display immediately
  timeDisplay.textContent = `Time Remaining: ${formatTime(time)}`;

  // Start the countdown
  const countdown = setInterval(() => {
    time--; // Decrease the time by 1 second
    timeDisplay.textContent = `Time Remaining: ${formatTime(time)}`;

    // When the timer reaches 0, stop the countdown and play the alarm
    if (time <= 0) {
      clearInterval(countdown);
      playAlarm(); // Play the alarm sound
    }
  }, 1000);
}

// Helper function to format time in MM:SS format
function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

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
