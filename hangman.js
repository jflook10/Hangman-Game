 function loadFunction() {

  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'
  var userGuess = [];          // hols user guess to display to page

  var accepted = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ' '];

  // Get elements
  var showLives = document.getElementById("mylives");
  var userGuessSection = document.getElementById("userGuess");
  var gameImage = document.getElementsByClassName("gameImage");

  userEvent();

  // Create guesses ul
  function result() {
    //li _ that will hold correct user guesses on the screen
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " guesses remaining";
    if (lives < 1) {
      showLives.innerHTML = "Boo, none for you Glen Coco. Refresh the page to try again.";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "Ace! You got your fancy drink and a nod of approval. Refresh the page to play again.";
      }
    }
  }


  //onkeyup function
  function userEvent(){
    document.onkeyup = function(event) {
      var guess = String.fromCharCode(event.keyCode).toLowerCase();
      if(accepted.includes(guess)){
        if(userGuess.indexOf(guess) == -1){
          for (var i = 0; i < word.length; i++) {
            //replace word guess space with correct letter
            if (word[i] === guess) {
                guesses[i].innerHTML = guess;
                counter += 1;
                } 
          } 
            var j = (word.indexOf(guess));
            if (j === -1) {
              lives -= 1;
              comments();
            } else {
              comments();
              }
            userGuess.push(guess);
            console.log(userGuess);
            userGuessSection.innerHTML = userGuess; 
        }
      }
    } 
  }
  
    
  // Play
  play = function () {
    categories = ["quinoa", "bespoke", "sushi", "sustainable", "totally", "rush", "frappuccino", "lulu lemon", "greek life", "leggings", "juice cleanse"];

    word = categories[Math.floor(Math.random() * categories.length)];
    word = word.replace(/\s/g, " ");
    console.log(word);

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  play();
  
}

function reset(){
//triggered when comment won or loss
}