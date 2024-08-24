let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");


const genCompChoice=() => {
    const options = ["rock","paper","scissor"];
    const randInx= Math.floor(Math.random() *3);
    return options[randInx];
}

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame= () =>{
    console.log("game was draw.");
    msg.innerText="Game Was Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner=(userWin) => {
    if(userWin){
        console.log("You win!")
        msg.innerText="You win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText=userScore;
    }else{
        console.log("You lose")
        msg.innerText="You lose!";
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    //generate computer choice
    const compChoice= genCompChoice();
    console.log("comp choice= ", compChoice);

    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin= compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"? false: true;
        }else{
            //rock, paper
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})

