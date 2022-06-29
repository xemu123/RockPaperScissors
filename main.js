const choices = ['rock','paper','scissors'];
let playerCount = 0;
let compCount = 0;
let count=0;
let resetBtn = document.querySelector('#btnx')
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let updateInfo = document.querySelector('.text-info');
let updateScore = document.querySelector('.score');


function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)];
}


function playGame(){
    rockBtn.addEventListener('click',()=>{
        let computerSelection = computerPlay();
        let playerSelection = 'rock';
        playRound(playerSelection,computerSelection);
        
        }
        );
        paperBtn.addEventListener('click',()=>{
        let computerSelection = computerPlay();
        let playerSelection = 'paper';
         playRound(playerSelection,computerSelection);
         
        }
        );
        scissorsBtn.addEventListener('click',()=>{
            let computerSelection = computerPlay();
            let playerSelection = 'scissors';
            playRound(playerSelection,computerSelection);
            
        }
        );
}



function resetScore(){
    playerCount = 0;
    compCount = 0;
    count=0;
}

function smallerPadding(){
    document.getElementById("title")
                .style.padding = "40px 0 50px 0";
    
}

function showBtns(){
    scissorsBtn.style.display = '';
    rockBtn.style.display = '';
    paperBtn.style.display = '';
}

function hideBtns(){
    scissorsBtn.style.display = 'none';
    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none';
    
}

function checkWinner(){
    
    if(playerCount == 3){
        updateInfo.textContent = `Game Over!`;
        updateScore.textContent = `The winner is >YOU<`; 
        smallerPadding();
        hideBtns();
    }else if(compCount == 3){
        updateInfo.textContent = `Game Over!`;
        updateScore.textContent = `The winner is >Computer!<`;   
        smallerPadding();
        hideBtns();
    }else if( count == 5){
        if (playerCount>compCount) {
            updateInfo.textContent = `Game Over!`;
        updateScore.textContent = `The winner is >YOU<`; 
        smallerPadding();
        hideBtns();
        }else{
            updateInfo.textContent = `Game Over!`;
        updateScore.textContent = `The winner is >Computer!<`;   
        smallerPadding();
        hideBtns();  
        }
 } console.log(count,playerCount,compCount)
}

function playRound(playerSelection,computerSelection){
  if(playerSelection === computerSelection){
        ++count;
        updateInfo.textContent = `Tie! Current round :${count}`;
        updateScore.textContent = `Current score is Player =${playerCount}  Computer = ${compCount}` 
        ;
    }else if(playerSelection === 'rock'&& computerSelection === 'paper'||
    playerSelection === 'paper'&& computerSelection === 'scissors'||
    playerSelection === 'scissors'&& computerSelection === 'rock'){
        compCount++;
        ++count;
        updateInfo.textContent = `You Lose! Current round :${count}`;     
        updateScore.textContent = `Current score is Player =${playerCount}  Computer = ${compCount}`;
        
        }else{
            ++count;
            playerCount++;
            updateInfo.textContent = `You Won! Current round :${count}`;
        updateScore.textContent = `Current score is Player =${playerCount}  Computer = ${compCount}`;
        
    }
   
    checkWinner();
        
}
function resetGame(){
    
   resetBtn.addEventListener('click',()=>{
        resetScore();
        showBtns();
        updateInfo.textContent = '    This game is B05 so good luck!'
        updateScore.textContent = '';
    })
}


resetGame();
playGame();




