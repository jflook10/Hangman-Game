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

  // Get elements
  var showLives = document.getElementById("mylives");
  var userGuessSection = document.getElementById("userGuess");

  userEvent();

  // Create guesses ul
   result = function () {
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
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }


  //onkeyup function
  function userEvent(){
    document.onkeyup = function(event) {
      var guess = String.fromCharCode(event.keyCode).toLowerCase();
      for (var i = 0; i < word.length; i++) {
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
  
    
  // Play
  play = function () {
    categories = ["quinoa", "bespoke", "sushi", "sustainable", "totally", "rush", "frappuccino"];


    word = categories[Math.floor(Math.random() * categories.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    //buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
  }

  play();
  
}