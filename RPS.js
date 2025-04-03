function getComputerChoice(){
    let computerAnswer = Math.floor(Math.random() * 3);

    if(computerAnswer == 0) return "rock";
    else if (computerAnswer == 1) return "paper";
    else return "scissor";
}

let humanScore = 0; 
let computerScore = 0;

function playRound(humanSelection, computerSelection){  
    let resultDiv = document.getElementById("results");

    let resultMessage = `You chose: ${humanSelection} <br> computer chose: ${computerSelection} </br>`;

    if(humanSelection === computerSelection){
        resultMessage += `Its a draw!`;
    }
    else if(humanSelection === "rock" && computerSelection === "scissor"){
        humanScore++;
       resultMessage += `You Win!`;
    }
    else if(humanSelection === "paper" && computerSelection === "rock"){
        humanScore++;
        resultMessage += `You Win!`;
    }
    else if(humanSelection === "scissor" && computerSelection === "paper"){
        humanScore++;
        resultMessage += `You Win!`;
    }
    else{
        computerScore++
        resultMessage += `You Lose!`;
    }   

    resultMessage += `<br> Your score: ${humanScore}<br>Computer score: ${computerScore}</br>`;
    
    if(humanScore === 5){
        resultMessage += `You are the Winner!`;
    }else if(computerScore === 5){
        resultMessage += `Computer is the Winner!`;
    }
    resultDiv.innerHTML = resultMessage;
}

document.querySelector('#rock').addEventListener("click", () => {
    if(humanScore < 5 && computerScore < 5){
        let computerSelection = getComputerChoice();
        console.log("Button Clicked");
        playRound("rock", computerSelection);   
    }
})

document.querySelector('#paper').addEventListener("click", () => {
    if(humanScore < 5 && computerScore < 5){
        let computerSelection = getComputerChoice();
        console.log("Button Clicked");
        playRound("paper", computerSelection);
    } 
})

document.querySelector('#scissor').addEventListener("click", () => {
    if(humanScore < 5 && computerScore < 5){
    let computerSelection = getComputerChoice();
    console.log("Button Clicked");
    playRound("scissor", computerSelection);
    }
})