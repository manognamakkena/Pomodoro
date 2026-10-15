const startButton = document.getElementById('start');
const countdownDisplay = document.querySelector('.timerBlock');

let countdownInterval;

startButton.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="min"]:checked');
    if(!selectedRadio) return;

    const minutes = selectedRadio.value;
    if(minutes==='') return;
    let timeLeft = minutes * 60;

    clearInterval(countdownInterval);
    countdownDisplay.innerText = `${String(minutes).padStart(2, '0')}:00`;

    countdownInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        countdownDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if(timeLeft <= 0){
            clearInterval(countdownInterval);
            countdownDisplay.innerText = '00:00';
        }
    },1000);
});