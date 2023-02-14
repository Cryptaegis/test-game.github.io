// Description: Test file for the game
// Variables déclaration 
let score0 = document.querySelector('#score-1'), 
    score1 = document.querySelector('#score-2'),
    current1 = document.querySelector('#current--1'),
    current2 = document.querySelector("#current--2"),
h1 = document.querySelector('.player-1'),
h2 = document.querySelector('.player-2'),
ActivePlayer;

    const switchPlayer = () => {
        if (ActivePlayer = 1) {h1.classList.add('player--active') + alert('player 1 your turn!')
          }else{ 
          ActivePlayer = 0 +  h2.classList.add('player--active') +  alert('player 2 your turn!');
          document.getElementById('current--1').textContent = '0';
           document.getElementById('current--2').textContent = '0'}
        };
            

// bouton New game
/*
- Au clic du bouton "New Game", les scores sont réinitialisés
- global inclu tous repars
*/
let begin= () =>{
    score0.innerHTML="0", 
    score1.innerHTML ="0", 
   current1.innerHTML= "0", current2.innerHTML="0",
    alert("Let the game begins BABY!"),
      ActivePlayer= 0,
   console.log(switchPlayer())
  };
  
  
  document.querySelector('#new').addEventListener('click', begin );
//bouton roll dice 
/* - Au clic du bouton "Roll Dice"-> Un nombre aléatoire est généré pour le dé entre 1 et 6 
- Le résultat du dé est affiché dans les scores player
-si le dé donne 1 alors score =0 
-C'est au tour de l'autre joueur de lancer le dé!
- si le dé donne 2,3,4,5,6 alors score = score + dé
- Lorsqu'un joueur arrive à 100 points ->
-Une notification se déclenche: 0.5 point(s)
-Il n'est plus possible de continuer à jouer (empêcher de continuer a jouer en tout cass) END GAME
*/

let rolldice = () => {
 let img =document.getElementById('babydice').src = "pictures/face-" + Math.round(Math.random()*5+1) + ".jpg";

  };

document.querySelector('#roll').addEventListener('click', rolldice);


//bouton Hold
/* - Au clic du bouton "Hold"-> Le score du joueur est ajouté au global 
- Le score du joueur en cour est remis à 0
- C'est au tour de l'autre joueur de lancer le dé! 
*/
let hold = () => {};



