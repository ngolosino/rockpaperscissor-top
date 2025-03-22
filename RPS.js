function getComputerChoice(){
    let computerAnswer = Math.floor(Math.random() * 3);

    if(computerAnswer == 0) return "rock";
    else if (computerAnswer == 1) return "paper";
    else return "scissor";
}

function getHumanChoice(){
    let humanAnswer = prompt("Enter your choice(Best of 5): ").toLowerCase();
    console.log(humanAnswer);

    while(!["rock", "paper", "scissor"].includes(humanAnswer)){
        humanAnswer = prompt("Invalied Choice. Please enter rock, paper, scissor");
    }
    
    return humanAnswer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if(humanSelection === computerSelection){
        console.log(`its a draw!`);
        return; 
    }
    else if(humanSelection === "rock" && computerSelection === "scissor"){
        humanScore++;
        console.log(`You Win!`);
    }
    else if(humanSelection === "paper" && computerSelection === "rock"){
        humanScore++;
        console.log(`You Win!`);
    }
    else if(humanSelection === "scissor" && computerSelection === "paper"){
        humanScore++;
        console.log(`You Win!`);
    }
    else{
        computerScore++
        console.log(`You Lose!`);
    }
}

while(computerScore < 5 && humanScore < 5){
    
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("Your score: " , humanScore, "Computer score: ", computerScore);  
}