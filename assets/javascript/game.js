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
	
	// Start
	gameStart() {

		// this.createCrystalNumbers();
		var images = ["assets/images/Purple-2.png","assets/images/Green@2x.png","assets/images/Blue@2x.png","assets/images/Red@2x.png"]
		for (var i = 0; i < 4; i++) {
			var randomNumber = Math.floor(Math.random() * 12)
			$(".crystals-container").append(`
				<img class="gems floating" value=${randomNumber} src=${images[i]}></img>`)
		}
	},

	// Increase Win
	increaseWinCount() {
		this.winCount++;
	},	
	// Increase Loss
	increaseLossCount() {
		this.lossCount++;
	},
	// NewRandomNumber
	NewTargetNumber() {
		this.targetNumber = Math.floor((Math.random() * 102) + 19);
	},
	// createCrystalNumbers() {
	// 	var crystal1 = Math.floor(Math.random() * 12);
	// 	var crystal2 = Math.floor(Math.random() * 12);
	// 	var crystal3 = Math.floor(Math.random() * 12);
	// 	var crystal4 = Math.floor(Math.random() * 12);

	// 	$("#crystal1").attr("value", crystal1)
	// 	$("#crystal2").attr("value", crystal2)
	// 	$("#crystal3").attr("value", crystal3)
	// 	$("#crystal4").attr("value", crystal4)

	// },
	// Add points to players score
	addPlayerPoints(points) {
		this.playerNumber += points;
	},
	// Did user Win
	didUserWin() {
		if (this.playerNumber === this.targetNumber) {
			return true;
		} else {
			return false;
		}
	},
	// Did user lose
	didUserLose() {
		if (this.playerNumber > this.targetNumber) {
			return true;
		} else {
			return false;
		}
	},
};


// -------- Game Controls -------- 

$(".crystals-container").on("click", ".gems", function() {
	console.log($(this).attr("value"))
	})

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



// -------- View -------- 


	// Wins
	// Loss
	// Players Score
	// Random Number

gameElements.gameStart();







