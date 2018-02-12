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


//updates addition in html




var gameElements = {

	winCount: 0,
	lossCount: 0,
	targetNumber: 0,
	playerNumber: 0,


//==============================
//--------- Start Game ---------
//==============================

	gameStart() {
		


		this.playerNumber = 0;

		$("#playernumber").text(this.playerNumber);

		$("#wincount").text(this.winCount);

		$("#losscount").text(this.lossCount);


	createCrystalNumbers();
	newTargetNumber();
	},
}; 

function createCrystalNumbers() {
	var crystal1 = Math.floor(Math.random() * 12 + 1);
	var crystal2 = Math.floor(Math.random() * 12 + 1);
	var crystal3 = Math.floor(Math.random() * 12 + 1);
	var crystal4 = Math.floor(Math.random() * 12 +);

	$("#crystal1").attr("value", crystal1)
	$("#crystal2").attr("value", crystal2)
	$("#crystal3").attr("value", crystal3)
	$("#crystal4").attr("value", crystal4)
};

// Increase Win
function increaseWinCount() {
	 gameElements.winCount++;
	 console.log("increaseWinCount was just called, the win count is " + gameElements.winCount)
	 $("#wincount").text(gameElements.winCount);
};

// Increase Loss
function increaseLossCount() {
	 gameElements.lossCount++;
	 console.log("increaseLossCount was just called, the win count is " + gameElements.lossCount)
	 $("#losscount").text(gameElements.lossCount);
};

// NewRandomNumber
function newTargetNumber() {
	gameElements.targetNumber = Math.floor((Math.random() * 102) + 19);
	console.log("newTargetNumber was just called, the newTargetNumber is " + gameElements.targetNumber)
	$("#targetnumber").text(gameElements.targetNumber);

};

// Add points to players score
function addPlayerPoints(points) {
	gameElements.playerNumber += points;
	console.log("addPlayerPoints was just called, insert points here " + gameElements.playerNumber)
	$("#playernumber").text(gameElements.playerNumber);
	winLossCount() 
};

//Dryer Win Loss Count
function winLossCount() {
	if (gameElements.playerNumber === gameElements.targetNumber) {
		increaseWinCount();
		gameElements.gameStart();
	} else if (gameElements.playerNumber > gameElements.targetNumber) {
		increaseLossCount();
		gameElements.gameStart();
	}
};



// -------- Game Controls -------- 
// On click the container and the content within the container...assign value to (this).
$(".crystals-container").on("click", ".gems", function() {
	console.log($(this).attr("value"))
	var value = $(this).attr("value");
	var points = parseInt(value);
	addPlayerPoints(points);
	})

gameElements.gameStart();


//=============================
//------- Saved Blocks --------
//=============================

	// // Did user Win
	// didUserWin() {
	// 	if (this.playerNumber === this.targetNumber) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// },

	// // Did user lose
	// didUserLose() {
	// 	if (this.playerNumber > this.targetNumber) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// },




	//	inputToBrowser() {
// 		document.getElementById('wincount').innerHTML = winCount;
// 		document.getElementById('losscount').innerHTML = lossCount;
// 		document.getElementById('targetnumber').innerHTML = targetNumber;
// 		document.getElementById('playernumber').innerHTML = playerNumber;
// 	},
// };


	// var images = ["assets/images/Purple-2.png","assets/images/Green@2x.png","assets/images/Blue@2x.png","assets/images/Red@2x.png"]
	// 	for (var i = 0; i < 4; i++) {
	// 		var randomNumber = Math.floor(Math.random() * 11 + 1)
	// 		var floatClass = "floating" + i;
	// 		$(".crystals-container").append(`<img class="gems ${floatClass}" value=${randomNumber} src=${images[i]}></img>`)
	// }
