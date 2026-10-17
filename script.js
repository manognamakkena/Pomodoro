const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const countdownDisplay = document.querySelector('.timerBlock');

let countdownInterval;
let timeLeft=0;
let isRunning = false;

startButton.addEventListener('click', () => {
    if (isRunning) return;

    if(timeLeft<=0){
        const selectedRadio = document.querySelector('input[name="min"]:checked');
        if(!selectedRadio) return;

        const minutes = selectedRadio.value;
        if(minutes==='') return;
        timeLeft = minutes * 60;

        clearInterval(countdownInterval);
        countdownDisplay.innerText = `${String(minutes).padStart(2, '0')}:00`;
    }
   
    isRunning=true;
    clearInterval(countdownInterval);

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
   })
   
    pauseButton.addEventListener('click', () => {
        clearInterval(countdownInterval);
        isRunning=false;


});