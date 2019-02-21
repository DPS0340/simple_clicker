window.onload = function () {
    "use strict";
    let number = document.getElementById("number");
    let push = document.getElementById("push");
    let resetbutton = document.getElementById("reset");
    let result = document.getElementById("result");
    let rightTimes;
    let pushTimes = 0;
    function win() {
        alert("You Win!");
    }
    function lose() {
        alert("You Lose!");
    }
    function click() {
        pushTimes++;
        result.innerText = pushTimes;
    }
    function displayResult(times) {
        number.innerText = times;
    }
    function reset() {
        pushTimes = 0;
        result.innerText = pushTimes;
        rightTimes = Math.floor(Math.random() * 10) + 1;
        displayResult(rightTimes);
        setTimeout(function () {
            if(pushTimes === rightTimes) {
                win();
                reset();
            } else {
                lose();
                reset();
            }
        }, 3000);
    }
    if(push.addEventListener) {
        push.addEventListener("click", click, false);
    }
    if(resetbutton.addEventListener) {
        resetbutton.addEventListener("click", reset, false);
    }
};