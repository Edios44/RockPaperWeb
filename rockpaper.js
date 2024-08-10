const hand =["rock","paper","scissor"]



function getComputerChoice(){
    let computerChoice
    let random_number = Math.floor(Math.random()*hand.length);
    computerChoice = hand[random_number]
    return computerChoice;
}



function getHumanChoice(){
    let choicePrompt = prompt("choose your hand\n1:rock\n2:paper\n3:scissor")
    let humanChoice

    if (choicePrompt== 1){
        humanChoice=hand[0]
    }
    else if (choicePrompt== 2){
        humanChoice=hand[1]
    }
    else if (choicePrompt== 3){
        humanChoice=hand[2]
    }
    else {
        alert("Error pls enter a number between 1 and 3")
    }
    return humanChoice
}



function playGame(){ 

    let humanScore = 0
    let computerScore = 0
    let winner
    function playRound(human,computer){
        

        if(human==hand[0] && computer==hand[1] || human==hand[2] && computer==hand[0] || human==hand[1] && computer==hand[2]){
    
            console.log("computer: "+computer +"\nyou: "+human+"\n computer wins!")
            winner= "computer"
            return winner
    
        }
        else if (computer==hand[0] && human==hand[1]|| computer==hand[2] && human==hand[0] || computer==hand[1] && human==hand[2]){
    
            console.log("computer: "+computer +"\nyou: "+human+"\n you win!")
            winner= "human"
            return winner
        }
        else{
            console.log("draw!\ncomputer: "+computer+"\nyou: "+human)
            winner= "draw"
            return winner
        }

        
    }


    for (let i=0 ;i<5 ;i++){

    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice,computerChoice)
    if(winner === "human" ){
        humanScore++
    }
    else if(winner === "computer"){
        computerScore++
    }
}
    let totalscore = `your score: ${humanScore} \ncomputer score: ${computerScore}`
    console.log(totalscore)
}


playGame()



