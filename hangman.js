
var wordLib = ["quinoa", "bespoke", "sushi", "sustainable", "totally", "rush", "frappuccino"];

//pull a word from the wordbank
var wordLibLength = wordLib.length; //library could be an array of words. 
    var livesCounter = 5;
	var playerWord = "";
	var letterArray= "";

function selectWord(){
        
    //select word from array wordLib
    playerWord = wordLib[Math.floor(Math.random()* 7)];
        
    //turn the playerWord into an array
    letterArray = playerWord.split("");
    console.log(letterArray);

    var wordLength = letterArray.length;
    //console.log(wordLength);

        

    var wordPlaceHolder = document.getElementById("wordSpace");

    //loop through length of the selected word to place a '_' where a letter would go
    for (var i = 0; i < wordLength; i++){
            //make a variable that creates a div. this placeholder will get overwritten with each iteration of the loop. 
          var newSpan = document.createElement("span");
          
          //sets the value of the innerHTML of the div to the array at index
          newSpan.innerHTML = "_ ";

          //adds the value of index to the page without losing the previous responses. 
          var addHashtag = wordPlaceHolder.appendChild(newSpan);
          //console.log(addHashtag);
    }
};

var userGuessArr = []; //ASK WHY THIS HAS TO BE GLOBAL TO CONSOLE CORRECTLY
//looking at user input to start the game
document.onkeyup = function(event) {
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	
	userGuessArr.push(userGuess);
	console.log(userGuessArr);

	showInstruction();

	//check if userGuess is in the playerword
	 // function checkLives(){
	 // 	var test = playerWord.includes(userGuess);
	 // 	if (test == true){
	 // 	alert("One letter right");
		// } else {
		//  	livesCounter--;
		// }
};


	

	//each userGuess, loop through
	// for(var i = 0; i < letterArray.length; i++ ){
		
	// } 



//show instruction, "press any alpha character, space, or dash to start your guess". after first hit, hide instruction
function showInstruction() {
	document.getElementById("instructions").innerHTML= "Press any alpha-key, 'space', or 'dash' to make a guess";
}


//hide word but leave underline 

//user guesses letter and triggers onkeyup

// if guess is correct, 
	// show letter from the hidden word list
	// if letters remaining counter = 0 , or no hidden letters, alert you win

// if guess is incorrect;
	// add letter to the letters guessed array - push, pop
	// decrease lives counter by 1
	// if lives remaining = 0, alert you lose

// 