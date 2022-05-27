/* Homepage & Buttons */

const homepage = document.getElementById("home");
const singlePlayer = document.getElementById("single");
const twoPlayer = document.getElementById("double");
const singlePlayerBtn = document.getElementById("home__single");
const twoPlayerBtn = document.getElementById("home__double");

singlePlayer.style.display = "none";
twoPlayer.style.display = "none";

singlePlayerBtn.addEventListener('click', () => {
    homepage.style.display = "none";
    singlePlayer.style.display = "flex";
})

twoPlayerBtn.addEventListener('click', () => {
    homepage.style.display = "none";
    twoPlayer.style.display = "flex";
})

/* Dice */

const dice = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
]

/* Single Player */

let player = 0;
let currentRoll = 0;
let playerRollBtn = document.getElementById("single__roll");
let singleNumDisplay = document.getElementById("single__numDisplay");
let singleMain = document.getElementById("single__main");
let singleDice = document.getElementById("single__diceDisplay");
singleDice.style.display = "none";
playerRollBtn.addEventListener('click', () => {
    const sglLoss = () =>{
        alert("You lost!");
        singlePlayer.style.display = "none";
        homepage.style.display = "flex";
        player = 0;
    }
    
    const sglWin = () =>{
        alert("You won!");
        singlePlayer.style.display = "none";
        homepage.style.display = "flex";
        player = 0;
    }


    currentRoll = Math.ceil(Math.random() * 6);
    singleDice.style.display = "flex";
    singleDice.src = dice[currentRoll-1];
    console.log(currentRoll);
    player += currentRoll;
    singleNumDisplay.innerHTML = "<p>" + `You rolled: ${currentRoll} <br> Your score is: ${player}` + "</p>";
    if(currentRoll == 1){
        singleDice.src = dice[currentRoll];
        singleMain.style.backgroundColor = "rgba(247, 143, 143, 0.811)";
        sglLoss();
    }
    else{
        
        if(player >= 20){
            sglWin();
            currentRoll = 0;
            player = 0;
        }
        else{
            singleMain.style.backgroundColor = "rgba(166, 253, 166, 0.726)"; 
            currentRoll = 0;
        }
    }
}

);

/* Two Player */

let player1 = 0;
let player2 = 0;
let p1RollNum = 0;
let p2RollNum = 0;
const p1Roll = document.getElementById("double__roll1");
const p2Roll = document.getElementById("double__roll2");
let p1Display = document.getElementById("p1Display");
let p2Display = document.getElementById("p2Display");
const p1Hold = document.getElementById("double__hold1");
const p2Hold = document.getElementById("double__hold2");
let p1HoldCheck = false;
let p2HoldCheck = false;
const p1WinGlobal = () => {};
const p2WinGlobal = () => {};
const drawGlobal = () => {};
let p1DiceDisplay = document.getElementById("p1DiceDisplay");
let p2DiceDisplay = document.getElementById("p2DiceDisplay");
p1DiceDisplay.style.display = "none";
p2DiceDisplay.style.display = "none";

    const p1Win = () =>{
        alert("Player 1 wins!");
        twoPlayer.style.display = "none";
        homepage.style.display = "flex";
        player1 = 0;
        player2 = 0;
        
    }
    const draw = () => {
        alert("Draw!");
        twoPlayer.style.display = "none";
        homepage.style.display = "flex";
        player1 = 0;
        player2 = 0;
    }
    const p2Win = () =>{
        alert("Player 2 wins!");
        twoPlayer.style.display = "none";
        homepage.style.display = "flex";
        player2 = 0;
        player1 = 0;
    }

p1Roll.addEventListener('click', () => {
    p1HoldCheck = false;
    p1RollNum = Math.ceil(Math.random() * 6);
    player1 += p1RollNum;
    p1DiceDisplay.style.display = "flex";
    p1DiceDisplay.src = dice[p1RollNum-1];
    p1Display.innerHTML = "<p>" + `Your last roll was ${p1RollNum} <br> Your total is ${player1}.` + "</p>";
    if(player1 >= 20){
        p1RollNum = 0;
        p2RollNum = 0;
        p1Win();
    }
    else{
        p1RollNum = 0;
        p2RollNum = 0;
    }
})

p2Roll.addEventListener('click', () => {
    p2HoldCheck = false;
    p2RollNum = Math.ceil(Math.random() * 6);
    p2DiceDisplay.style.display = "flex";
    p2DiceDisplay.src = dice[p2RollNum-1];
    player2 += p2RollNum;
    p2Display.innerHTML = "<p>" + `Your last roll was ${p2RollNum} <br> Your total is ${player2}.` + "</p>";
    if(player2 >= 20){
        p2Win();
        p1RollNum = 0;
        p2RollNum = 0;
    }
    else{
        p1RollNum = 0;
        p2RollNum = 0;
    }
});

p1Hold.addEventListener("click", () => {
    p1HoldCheck = true;
    p1Display.innerHTML = "<p>" + `You held, your total is ${player1}.` + "</p>";
    if(p1HoldCheck == true && p2HoldCheck == true){
        if(player1 > player2){
            p1Win();
        }
        else if(player1 == player2){
            draw();
        }
        else{
            p2Win();
        }
    }
})

p2Hold.addEventListener("click", () => {
    p2HoldCheck = true;
    p2Display.innerHTML = "<p>" + `You held, your total is ${player2}.` + "</p>";
    if(p1HoldCheck == true && p2HoldCheck == true){
        if(player1 > player2){
            p1Win();
        }
        else if(player1 == player2){
            draw();
        }
        else{
            p2Win();
        }
    }
})