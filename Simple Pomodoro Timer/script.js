let timer;
let isRunning = false;
let isBreakTime = false;
let time = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const switchButton = document.getElementById('switch');

function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function countdown() {
    if (time > 0) {
        time--;
        updateTimerDisplay();
    } else {
        clearInterval(timer);
        alert(isBreakTime ? "Break Time Over!" : "Work Time Over!"); // Alert at the end of timer
    }
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(countdown, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    time = isBreakTime ? 5 * 60 : 25 * 60; // Reset to 5 minutes for break or 25 minutes for work
    updateTimerDisplay();
});

switchButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    isBreakTime = !isBreakTime;
    time = isBreakTime ? 5 * 60 : 25 * 60; // Switch the timer between work and break mode
    updateTimerDisplay();
});

// Initial display
updateTimerDisplay();
