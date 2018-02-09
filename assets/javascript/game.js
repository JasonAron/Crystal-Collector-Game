//=============================
// -------- Game Logic -------- 
//=============================

// Game Start 
	//Random number = (19 - 120). Set at the beginning of every game.
		//Rng to create a number and push it to the display.

	//The four crystals = (1 - 12).(Buttons).onClicks
		//Assign hidden values to each crystal.
		//On click will add a specific amount to the player's score.

	//Users Score starts at zero.
		//User wins if their total score === random number.
			//win++
		//User loses if there total score > random number.
			//lose++

// Game restarts if player wins or loses.

// -------- End Game Logic --------


//================================================
// -------- 2(-_-2) Now do things (9-_-)9 --------
//================================================


var gameElements = {

	winCount: 0,
	lossCount: 0,
	targetNumber: 0,
	playerNumber: 0,
	

	// Increase Win
	increaseWinCount() {
		this.winCount++;
	}	
	// Increase Loss
	increaseLossCount() {
		this.lossCount++;
	}
	// NewRandomNumber
	NewTargetNumber() {
		this.targetNumber = Math.floor((Math.random() * 102) + 19);
	}
	// Add points to players score
	addPlayerPoints() {
		this.playerNumber += ???;
	}

	// Did user Win
	didUserWin() {
		if (this.playerNumber === this.targetNumber) {
			return true;
		} else {
			return false;
		}
	}

	// Did user lose
	didUserLose() {
		if (this.playerNumber > this.targetNumber) {
			return true;
		} else {
			return false;
		}
	}
};


// -------- Crystal Variables -------- 


var crystal1 =
var crystal2 =
var crystal3 =
var crystal4 =


// -------- Game Controls -------- 


var gameControls = {

	$("#crystal1").on("click", function() {
	}
	$("#crystal2").on("click", function() {
	}
	$("#crystal3").on("click", function() {
	}
	$("#crystal4").on("click", function() {
	}	
// On click
// Specify what crystal was clicked
// Add crystals points to counter
// Did user win
	// Restart Round
	// wins++
// Did user lose
	//Restart round
	//lose++
// Reset game.Elements	
};


// -------- View -------- 


	// Wins
	// Loss
	// Players Score
	// Random Number









