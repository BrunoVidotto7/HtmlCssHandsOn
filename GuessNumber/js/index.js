const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptNumber: 0,
    numberDrawn: function randomValue () {
        return Math.round(Math.random() * this.max);
    }
}

let numberDrawn = Guess.numberDrawn();

function updateAttempt (attempt, value){
    attempt.innerHTML = 'Attempt: ' + value
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Enter some number!')
        return;
    }

    updateAttempt(attempt, ++Guess.attemptNumber);

    if(numberDrawn == kick){
        playAgain();
        status.innerHTML = "Congratulations, you got it right!"; 
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    } else if(numberDrawn > kick){
        status.innerHTML = 'Number is bigger!';
        status.style.color = '#de4251';
        clear()
    }else if(numberDrawn < kick){
        status.innerHTML = 'Number is less!';
        status.style.color = '#de4251';
        clear()
    }
};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart (){
    document.location.reload(true);
};

function clear(){
    document.getElementById('kick').value = '';
};