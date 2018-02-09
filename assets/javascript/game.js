// -------- Game Logic -------- //
// Game Start 
	//Random number = (19 - 120). Set at the beginning of every game.
		//Rng to create a number and push it to the display.

	//The four crystals = (1 -12).(Buttons).onClicks
		//Assign hidden values to each crystal.
		//On click will add a specific amount to the player's score.

	//Users Score starts at zero.
		//User wins if their total score === random number.
			//win++
		//User loses if there total score > random number.
			//lose++

// Game restarts if player wins or loses.
// -------- End Game Logic --------//

// ------- Notes (OOP) -------- //
	// ---- Classes ---- //
	// Constructor- a special method for creating and initializing an object created within a class.
	// Classes- are "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
	// Class declaration- To declare a class, you use the class keyword with the name of the class ("Rectangle" here).
	// ---- State & Behavior ---- //
	// Lamp is an object.
	// The "state" in lamp:on and off.
	// The "behavior" in lamp:turn on and turn off.
// -------- End Notes -------- //


// -------- So much pseudo code and notes...now do things (9-_-)9 -------- //

var gameElements = {

	// Increase Win

	// Increase Loss

	// NewRandomNumber

	// Add points to players score

	// Did user Win

	// Did user lose
};


// -------- Game Controls -------- //

var gameControls = {
	// On click
		// Specify what crystal was clicked
		// Add crystals points to score
		// Did user win
			// Restart Round
			// wins++
		// Did user lose
			//Restart round
			//lose++
	// Reset game.Elements
		// crystal1
		// crystal2
		// crystal3
		// crystal4
};


// -------- Crystal Variables -------- //

var crystal1 
var crystal2 
var crystal3 
var crystal4 


// -------- View -------- //

	// Wins
	// Loss
	// Players Score
	// Random Number









