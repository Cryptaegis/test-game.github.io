// Description: Test file for the game
// Variables déclaration 

let score0 = document.querySelector('#score--0'), 
score1 = document.querySelector('#score--1'),
current1 = document.querySelector('#sauce--0'),
current2 = document.querySelector('#sauce--1'),
h1 = document.querySelector('.player-1'),
h2 = document.querySelector('.player-2'),
first = document.querySelector('.panel-1'),
   second= document.querySelector('.panel-2'),
  active = document.querySelector('.player--active'),
activePlayer =1,
roundScore =0,
score = [0,0], 
play,
random,
stock = document.getElementById('hold');

let switchPlayer = () => {

if (activePlayer === 1){ 
activePlayer = 0,
roundScore = 0,
current2.textContent = '0',
first.classList.add('player--active'),
second.classList.remove('player--active')
}else{ 
activePlayer = 1,
roundScore =0, 
current1.textContent = '0',
current1.textContent = '0',
second.classList.add('player--active'),
first.classList.remove('player--active')      
}
};
// Au clic du bouton "New Game" - > Le jeu est initialisé et le joueur 1 commence

let begin= () =>{
score0.innerHTML="0", 
score1.innerHTML ="0", 
current1.innerHTML= "0", current2.innerHTML="0",
alert("Let the game begins BABY!"); 
switchPlayer(activePlayer= 1)
 stock.disabled = false;

};


document.querySelector('#new').addEventListener('click', begin );

// Au clic du bouton "Roll Dice" - > Le joueur lance le dé et le résultat est affiché sur le dé et en mm temps le score ROUND (score) est affiché

let roll = () =>{

  //1. random number
  
 let random  = Math.floor(Math.random() * 5) + 1;
  //2. display the result

document.getElementById('dice-0').src = `pictures/face-${random}.jpg`;
if (random !==1)
  {
document.querySelector(`#sauce--${activePlayer}`).textContent = roundScore += random;
console.log(random)
 
                  
}else{
    switchPlayer()
}

};
document.querySelector('#roll').addEventListener('click', roll );


//- Au clic du bouton "Hold* - > Les points ROUND (score)  du joueur sont envoyés dans le GLOBAL(current): et en mm temps C'est au tour de l'autre joueur de lancer le de
let hold = () =>{

 score[activePlayer] += roundScore;
document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

if(score[activePlayer] >= 100){
stock.disabled = true;
alert(`winner${activePlayer}!`);
begin(activePlayer = 1)
}else{
  switchPlayer()
}
};
document.querySelector('#hold').addEventListener('click', hold );






