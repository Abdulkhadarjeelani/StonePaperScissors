let userScore = 0;
let computerScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const geneCompChoice = () => {
     const options =["rock", "paper","scissors"];
     const randIdx= Math.floor(Math.random() * 3);
     return options[randIdx];
};

const drawGame = () =>{
    //console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};



const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("you Win");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        compScorePara.innerText = computerScore;
       // console.log("you Lose");
        msg.innerText = `You lost ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {

  console.log("user choice = ",userChoice);
  const compChoice = geneCompChoice();
  console.log("comp choice = ",compChoice);

  if(userChoice === compChoice){
  drawGame();
}
  else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors, paper
       userWin =  compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        //rock, scissors
        userWin =  compChoice === "scissors" ? false : true; 
    }
    else{
        //rock, paper
       userWin = compChoice === "rock" ? false: true;
    }

    showWinner(userWin,userChoice,compChoice);
  }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})