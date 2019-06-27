
// Initialize global variables
var minimum = 1
var maximum = 3
var choice_rock = "ROCK"
var choice_paper = "PAPER"
var choice_scissors = "SCISSORS"
var users_choice = ""
var computers_choice = ""
var message_draw = "You get to feel equal in intelligence to a computer! This is not a small achievement!"
var message_victory = "You get to feel SUPERIOR in intelligence to a computer! What an intelligent person you are! Give yourself a hug and then your coworker for their good work!"
var message_defeat = "You get to play this great game again! Try as many times as your wish!"

// Basic game logic that assigns the computer's chosen weapon according to a random number
function game(choice) {
	console.log("--- Invoking function: game() --- ");
	number = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	console.log("computer's number: " + number);

	// Setting the users choice of "weapon" according to the parameter
	if (choice == 3) {
		users_choice = choice_rock		
	}
	else if (choice == 2) {
		users_choice = choice_paper
	}
	else if (choice == 1) {
		users_choice = choice_scissors
	}
	

	// Displaying the computer's selection of "weapon"
	if (number == 3) {
		computers_choice = choice_rock;
		console.log("Computer: "+ computers_choice + " User: " + users_choice);
		addImage(users_choice,computers_choice);
	}
	else if (number == 2) {
		computers_choice = choice_paper;
		console.log("Computer: "+ computers_choice + " User: " + users_choice);
		addImage(users_choice,computers_choice);
	}
	else if (number == 1) {
		computers_choice = choice_scissors;
		console.log("Computer: "+ computers_choice + " User: " + users_choice);
		addImage(users_choice,computers_choice);
	}

}

// Add the Draw image of check, whether Victory or defeat image should be added
function addImage(user_choice,computer_choice) {
	console.log("--- Invoking function: addImage() --- ");
	if (user_choice == computer_choice){
		addVictoryOrDefeatImage(3);
	}
	else {
		checkResults(user_choice,computer_choice);
		
	}
}


// Compare the user choice to the computer choice
function checkResults(user_choice,computer_choice) {
	console.log("--- Invoking function: checkResults(user_choice,computer_choice) --- ");
	if (user_choice == choice_rock) {
		if (computer_choice == choice_paper){
			addVictoryOrDefeatImage(0);
		}
		else if (computer_choice == choice_scissors) { 
			addVictoryOrDefeatImage(1);
		}
	}
	else if (user_choice == choice_paper) {
		if (computer_choice == choice_scissors){
			addVictoryOrDefeatImage(0);
		}
		else if (computer_choice == choice_rock) { 
			addVictoryOrDefeatImage(1);
		}
	}
	else if (user_choice == choice_scissors) {
		if (computer_choice == choice_rock){
			addVictoryOrDefeatImage(0);
		}
		else if (computer_choice == choice_paper) { 
			addVictoryOrDefeatImage(1);
		}
	}
	
	
}

// Add the victory or defeat image based on the result parameter (0 = defeat, 1 = victory, 3 = draw)
function addVictoryOrDefeatImage(result) {
	console.log("--- Invoking function: addVictoryOrDefeatImage(result) --- ");
	if (result == 0){
			$('#result').html('<p>DEFEAT <i class="fa fa-frown-o"></i></p><p>You picked: ' + users_choice + ', computer picked: '+computers_choice+'</p><img class="result_image" src="failure.png"><p>Your prize: '+message_defeat+'</p>');
	}
	else if (result == 1) { 
			$('#result').html('<p>VICTORY! <i class="fa fa-flag-checkered"></i></p><p>You picked: ' + users_choice + ', computer picked: '+computers_choice+'</p><img class="result_image" src="success.png"><p>Your prize: '+message_victory+'</p>');
	}
	else if (result == 3) {
			$('#result').html('<p>DRAW... <i class="fa fa-handshake-o"></i></p><p>You picked: ' + users_choice + ', computer picked: '+computers_choice+'</p><img class="result_image" src="draw.png"><p>Your prize: '+message_draw+'</p>');
	}
}

function reset(){
	console.log("--- Invoking function: reset() --- ");
	$('#result').empty();
}

