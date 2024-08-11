const hand =["rock","paper","scissor"]
let winner

const rockbtn = document.getElementById("rock")
const paperbtn = document.getElementById("paper")
const scissorbtn = document.getElementById("scissor")

const results = document.querySelector(".results")


const wnr = document.createElement("p")
const scoreele = document.createElement("p")
const finalwnnr = document.createElement("p")



let humanScore = 0
let computerScore = 0

let humanChoice = []

rockbtn.addEventListener("click", function (){
    humanChoice=hand[0]
    playGame()
    lescore()
})

paperbtn.addEventListener("click", function(){
    humanChoice=hand[1]
    playGame()
    lescore()
})

scissorbtn.addEventListener("click", function(){
    humanChoice=hand[2]
    playGame()
    lescore()
})


function getComputerChoice(){
    let computerChoice
    let random_number = Math.floor(Math.random()*hand.length);
    computerChoice = hand[random_number]
    return computerChoice;
}


function playGame(){ 

    

    //compares hands, prints the winner and returns a winner value
    function playRound(human,computer){
        

        if(human==hand[0] && computer==hand[1] || human==hand[2] && computer==hand[0] || human==hand[1] && computer==hand[2]){
            wnr.style.whiteSpace="pre"
            wnr.textContent="computer: "+computer +"\nyou: "+human+"\n"
            results.appendChild(wnr)
            winner= "computer"
            return winner
    
        }
        else if (computer==hand[0] && human==hand[1]|| computer==hand[2] && human==hand[0] || computer==hand[1] && human==hand[2]){
            wnr.style.whiteSpace="pre"
            wnr.textContent="computer: "+computer +"\nyou: "+human+"\n"
            results.appendChild(wnr)
            winner= "human"
            return winner
        }
        else{
            wnr.style.whiteSpace="pre"
            wnr.textContent="draw!\ncomputer: "+computer+"\nyou: "+human
            results.appendChild(wnr)
            winner= "draw"
            return winner
        }

        
    }


    let computerChoice = getComputerChoice()
    playRound(humanChoice,computerChoice)

    return winner
}

function lescore(){
    if(winner === "human" ){
        humanScore++
    }
    else if(winner === "computer"){
        computerScore++
    }

let totalscore = `your score: ${humanScore}/5 \ncomputer score: ${computerScore}/5`



scoreele.style.whiteSpace= "pre"
scoreele.textContent= totalscore
results.appendChild(scoreele)
winnerloser()

}

function winnerloser(){
    if(humanScore==5){
        humanScore=0
        computerScore=0
        finalwnnr.textContent="You win!"
        results.appendChild(finalwnnr)
    }
    else if(computerScore==5){
        humanScore=0
        computerScore=0
        finalwnnr.textContent="computer wins!"
        results.appendChild(finalwnnr)
    }
    else{
        results.removeChild(finalwnnr)
    }
    
}

