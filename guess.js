
var num;
var count;
var guesses = [];

function loadNum() {
  num = Math.floor(Math.random()*100)+1;
  count = 5;
  guesses = [];
  document.getElementById('status').innerHTML = "5 guesses remaining";
  document.getElementById('guessBox').value = "";
  document.body.style.backgroundColor = "yellow";
  
}

function checkGuess() {
  var val = document.getElementById('guessBox').value;
  var status = "";
  //alert(num);
  if (val<1 || val>100 || isNaN(val)) {
	alert("Please input a valid integer between 1 and 100");
	return;
  }
  if (guesses.indexOf(val)!=-1) {
	alert("Already guessed that number..try again!");
	return;
  }
  guesses.push(val);
  var diff = val - num;
  if (diff == 0) {
	document.body.style.backgroundColor = "#009900";
	alert("Congrats! You win!");
	count=0;
	loadNum();
	return;
  } else if (diff > -10 && diff < 0) {
	status = "Getting hotter..just a little higher";
  } else if (diff < 0) {
	status = "Cold..go higher";
  } else if (diff < 10) {
	status = "Getting hotter..just a little lower";
  } else if (diff > 0) {
	status = "Cold..go lower";
  }
  count--;
  status = status + " -- " + count + " guesses remaining.";
  if (count === 0) {
	status = "5 guesses remaining";
	alert("Sorry you have run out of guesses -- the number was " + num +  ". The game is starting over.");
        loadNum();
  }
  document.getElementById('status').innerHTML=status;
  //alert(val + " - " + num);
}

function showNum() {
  alert("The correct number is " + num);
}

