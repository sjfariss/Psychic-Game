
 
 //Creates an array of all alpha options

  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var letlength = [];
//after 9 guesses to loop back to reset guess gesses left but keep wins and losses-after 9 guesses, they get 9 guesses again and so on, and on
//Creating variables to hold number of wins, losses and lives
  var wins = 0;
  var losses = 0;
  var guessleft = 9; 
//function is run when user presses key
document.onkeyup = function(event) {
     
  
  //determins which key was pressed and makes all lower case for matching and to keep guess at letters only
  var userGuess = event.key.toLowerCase(); 
  var pattern = /[a-z]/;
  var valid = userGuess.match(pattern);
  if (valid) {
      guessleft--;
      letlength.push (userGuess)
  } 
  else {
      alert("The Psychic only guesses letters!");
      userGuess = "";
  }
  
//Randomly chooses a choice from computerchoices
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     
//to make variable calculations and reset when necessary
  if ((userGuess === computerGuess)) { 
      wins++;
  }  
  
  if ((guessleft === 0)) {
      losses++;
      letlength = [];
      
  }
  

  if ((guessleft === -1)) {
      guessleft = 8;
  }



  //Set the inner HTML, contents of the #game div to our html string
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#guessleft").innerHTML = guessleft;
      document.querySelector("#letlength").innerHTML = letlength.join(", ");


  
}; 
  


   


