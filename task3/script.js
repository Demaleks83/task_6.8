const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightE2.removeEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeGreen);
}

function makeGreen() {
    trafficLightE3.style.background = ('green');
    trafficLightE3.removeEventListener('click', makeYellow);
    trafficLightE3.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeRed);
trafficLightE2.addEventListener('click', makeYellow);
trafficLightE3.addEventListener('click', makeGreen);
