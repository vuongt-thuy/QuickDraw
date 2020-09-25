let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
    var offset = -length - length * value / (timePercent);
    progressBar.style.strokeDashoffset = offset;
    pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`;
};

//circle ends
const displayOutput = document.querySelector('.display-remain-time')

let intervalTimer;
let timeLeft;
let wholeTime = 1 * 60; // manage this to set the whole time 
let isPaused = false;
let isStarted = false;


update(wholeTime, wholeTime); //refreshes progress bar
displayTimeLeft(wholeTime);

function changeWholeTime(seconds) {
    if ((wholeTime + seconds) > 0) {
        wholeTime += seconds;
        update(wholeTime, wholeTime);
    }
}

function timer(seconds) { //counts time, takes seconds
    let remainTime = Date.now() + (seconds * 1000);
    displayTimeLeft(seconds);

    intervalTimer = setInterval(function() {
        timeLeft = Math.round((remainTime - Date.now()) / 1000);
        if (timeLeft < 0) {
            // Time Out
            clearInterval(intervalTimer);
            isStarted = false;
            displayTimeLeft(wholeTime);
            $('#showHint').css('display','none');
            $('#popUp').css('display', 'block');
            $('#timeOutPopup').css('display', 'block');
            return;
        }
        displayTimeLeft(timeLeft);
    }, 1000);
}

function pauseTimer(event) {
    if (isStarted === false) {
        timer(wholeTime);
        isStarted = true;
    } else if (isPaused) {
        timer(timeLeft);
        isPaused = isPaused ? false : true
    } else {
        clearInterval(intervalTimer);
        isPaused = isPaused ? false : true;
    }
}

function displayTimeLeft(timeLeft) { //displays time on the input
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    displayOutput.textContent = displayString;
    update(timeLeft, wholeTime);
}

window.addEventListener('load', pauseTimer);
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-46156385-1', 'cssscript.com');
ga('send', 'pageview');