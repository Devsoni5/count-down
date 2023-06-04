let timerId; // Variable to store the timer ID

// Function to start the countdown timer
function startTimer() {
  const timeInput = document.getElementById("timeCount");
  const currentTime = document.getElementById("current-time");

  // Get the user input and convert it to an integer
  const inputValue = parseInt(timeInput.value);

  // Check if the input is a valid integer
  if (Number.isInteger(inputValue) && inputValue >= 0) {
    // Clear any existing timer
    clearInterval(timerId);

    // Set the initial value of the timer
    currentTime.innerText = Math.floor(inputValue);

    // Start the countdown timer
    timerId = setInterval(() => {
      inputValue--;

      // Update the displayed time
      currentTime.innerText = Math.floor(inputValue);

      // Check if the timer has reached 0
      if (inputValue === 0) {
        clearInterval(timerId);
      }
    }, 1000);
  } else {
    // Invalid input, display 0
    currentTime.innerText = "0";
  }
}

// Event listener for Enter key press
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startTimer();
  }
});

// Event listener for input field change
document.getElementById("timeCount").addEventListener("change", startTimer);
