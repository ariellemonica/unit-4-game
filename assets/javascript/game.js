$(document).ready(function(){

var gameNum = 0;
var crystal1 = 0; 
var crystal2 = 0;
var crystal3 = 0; 
var crystal4 = 0;
var userTotal = 0;
var gameOver = false;
var winsCount = 0;
var lossesCount = 0;

function init(){
    gameOver = false;
    userTotal = 0;
    console.log("Is the game over? " + gameOver);

    $("#playAgain").hide();
    $("#resetEverything").hide();
    
    gameNum = gameRandomNum(19,120);
    $("#gameNumber").text(gameNum);
    console.log("This is the game num: " + gameNum);

    $("#yourNumber").text(userTotal);

    crystal1 = crystal(1,12);
    console.log("Crystal 1: " + crystal1);

    crystal2 = crystal(1,12);
    console.log("Crystal 2: " + crystal2);

    crystal3 = crystal(1,12);
    console.log("Crystal 3: " + crystal3);

    crystal4 = crystal(1,12);
    console.log("Crystal 4: " + crystal4);

};
init();

//onclick crystal one, add crystal1 number to total
$("#elCrystal1").on("click",function(){
    
    if (gameOver === true){
        return;
    }
    
    userTotal = userTotal + crystal1;
    displayTotal();
    checkIfWin();
})

//onclick crystal two, add crystal2 number to total
$("#elCrystal2").on("click", function(){

    if (gameOver === true){
        return;
    }

    userTotal = userTotal + crystal2;
    displayTotal();
    checkIfWin();
})

//onclick crystal three, add crystal3 number to total
$("#elCrystal3").on("click", function(){
    
    if (gameOver === true){
        return;
    }

    userTotal = userTotal + crystal3;
    displayTotal();
    checkIfWin();
})

//onclick crystal four, add crystal4 number to total
$("#elCrystal4").on("click", function(){
    
    if (gameOver === true){
        return;
    }

    userTotal = userTotal + crystal4;
    displayTotal();
    checkIfWin();
})



//play again button
$("#playAgain").on("click", function(){
    init();
})


//reset everything button
$("#resetEverything").on("click", function(){
    $("#winsDisplay").text("");
    $("#lossesDisplay").text("");
    init();
})


//generate random number for game, between 19 - 120
function gameRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate random numbers for crystals, between 1 - 12
function crystal(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//display your total 
function displayTotal(){
    $("#yourNumber").text(userTotal);
}

//check if you won
function checkIfWin(){
    if (userTotal === gameNum){
        winsCount++;
        $("#winsDisplay").text("Wins: " + winsCount);
        gameOver = true;
        console.log("You win! Is game over?" + gameOver);

        $("#playAgain").show();
        $("#resetEverything").show();

    } else if (userTotal > gameNum){
        lossesCount++;
        $("#lossesDisplay").text("Losses: " + lossesCount);
        gameOver = true;
        console.log("You lose! Is game over?" + gameOver);

        $("#playAgain").show();
        $("#resetEverything").show();

    }
}


})
