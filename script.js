let startTime, elapsedTime = 0, timerInterval;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds = Math.floor((ms % 1000));
    return ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')};
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime + (elapsedTime || 0);
    display.textContent = formatTime(elapsedTime);
}

function start() {
    if (!timerInterval) {
        startTime = Date.now();
        timerInterval = setInterval(updateDisplay, 10);
    }
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
    laps.innerHTML = '';
}

function lap() {
    if (timerInterval) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = Lap ${laps.children.length + 1}: ${lapTime};
        laps.appendChild(lapItem);
    }
}
