
var minutesCounter = document.getElementById("minutes-counter");
var secondsCounter = document.getElementById("seconds-counter");
var seconds = 60;
var minutes = 4;
var gameTimer = null;
var player1 = document.getElementById("player1_score");
var player2 = document.getElementById("player2_score");
var target , player1Name , player2Name ;

// Start Functions 
function startGame() {
    var gameContainer = document.getElementById("game_container");
    gameContainer.style.display = "flex"
    var inputFields = document.getElementById("targets_input");
    inputFields.style.display = "none";
}

function inputValueCatcher(){
    var targetNum = document.getElementById("targetNumber").value;
    var name1 = document.getElementById("player1Name").value ;
    var name2 = document.getElementById("player2Name").value;
    if(name1 === "" ){
        name1 = "Player 1";
        if(name2 === ""){
            name2 = "Player 2"
        }
    }else {
        console.log("User Entered Names");
    }
    player1Name = document.getElementById("player1-name")
    player2Name = document.getElementById("player2-name");

    player1Name.innerText = name1;
    player2Name.innerText = name2;

    return [targetNum , name1 , name2];
}

// Timer Function 
function timer() {
    seconds--;
    if (seconds == 0) {
        minutes--;
        seconds = 59;
        if (minutes == 0) {
            minutes = 4;
            seconds = 60;
        }
    }
    var m = minutes < 10 ? "0" + minutes : minutes
    var s = seconds < 10 ? "0" + seconds : seconds
    minutesCounter.innerText = m;
    secondsCounter.innerText = s;
}

function watchTimer() {
    gameTimer = setInterval(timer, 1000);
}

// Timer Buttons Functions 
var pauseButton = document.getElementById("pauseIcon");
var playButton = document.getElementById("playIcon");
var clickCounter = 0;
function pauseTimer() {
    clickCounter++;
    if (clickCounter == 1 || clickCounter == 3 || clickCounter == 5 || clickCounter == 7) {
        watchTimer();
        playButton.style.display = "flex";
        pauseButton.style.display = "none"

    } else if (clickCounter == 2 || clickCounter == 4 || clickCounter == 6 || clickCounter == 8) {
        clearInterval(gameTimer);
        pauseButton.style.display = "flex";
        playButton.style.display = "none";
    }
}

// Player Score Functions 
var player1ScoreCount = 0;
var player2ScoreCount = 0;

// Player 1 Score Increaser 
function player1ScoreIncreasers() {
    player1ScoreCount++;
    return player1ScoreCount;
}

// Player 1 Score Decreaser 
function player1ScoreDecreasers() {
    player1ScoreCount--;
    return player1ScoreCount;
}

// Player 2 Score Increaser 
function player2ScoreIncreasers() {
    player2ScoreCount++;
    return player1ScoreCount;
}

// Player 2 Decreaser 
function player2ScoreDecreasers() {
    player2ScoreCount--;
    return player1ScoreCount;
}

// Player 1 Score Function 
function player1Score(elem, str) {
    if (str === "Increase") {
        player1ScoreIncreasers();
        player1.innerHTML = player1ScoreCount;
    } else if (str === "Decrease") {
        player1ScoreDecreasers();
        player1.innerHTML = player1ScoreCount;
    } else {
        alert("Player 1 Score Function is not working");
    }
    return player1ScoreCount;
}

// Player 2 Score Function 
function player2Score(elem, str) {
    if (str === "Increase") {
        player2ScoreIncreasers();
        player2.innerHTML = player2ScoreCount;
    } else if (str === "Decrease") {
        player2ScoreDecreasers();
        player2.innerHTML = player2ScoreCount;
    } else {
        alert("Player 2 Score Function is not working")
    }
    return player2ScoreCount;
}

function resetTimer(elemnt) {
    seconds = 59;
    minutes = 4;
    var m = minutes < 10 ? "0" + minutes : minutes
    var s = seconds < 10 ? "0" + seconds : seconds
    minutesCounter.innerHTML = m;
    secondsCounter.innerHTML = s;
    clearInterval(gameTimer);
    alert("Please refresh the page to Restart the game")
}


// Game Reset Function
function resetGame() {
    var resultContainer = document.getElementById("result_container")
    var inputValues = inputValueCatcher();
    target = inputValues[0];        
    var firstPlayer = inputValues[1];
    var secondPlayer = inputValues[2];
    console.log(target , firstPlayer , secondPlayer);
    if (player1ScoreCount === target || player1ScoreCount > target ) {
        resultContainer.innerHTML = `${firstPlayer} has won`
        clearInterval(gameTimer);
    } else if (player2ScoreCount === target || player2ScoreCount > target) {
        resultContainer.innerHTML = `${secondPlayer} has won`
        clearInterval(gameTimer);
    } else {
        resultContainer.innerHTML = "Unable to generate Result";
    }
    player1ScoreCount = 0;
    player2ScoreCount = 0;
    player1.innerHTML = player1ScoreCount;
    player2.innerHTML = player2ScoreCount;
    resetTimer();
}