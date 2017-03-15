
var minTargetNumber = 19;
var maxTargetNumber = 120;
var minButtonNumber = 1;
var maxButtonNumber = 12;
var totalScore = 0;
var totalLosses = 0;
var totalWins = 0;
var crystalButtons = $('.crystal-button');
var randomTargetNumber;

function randomNumberFromRange(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

function setRandomTargetNumber() {
	randomTargetNumber = randomNumberFromRange(minTargetNumber, maxTargetNumber);
}
setRandomTargetNumber();

$("#target-number").html(randomTargetNumber);
$("#wins").html("Wins:" + totalWins);
$("#losses").html("Losses:" + totalLosses);
$("#total-score").html(totalScore);

function setButtonValues() {
	for (var i = 0; i < crystalButtons.length; i++) {
		var randomButtonNumber = randomNumberFromRange(minButtonNumber, maxButtonNumber);
		$(crystalButtons[i]).val(randomButtonNumber);
	}
}
setButtonValues();

function updateOutcomeAlertOnScreen(alertMessage) {
	$("#outcome-alert").html(alertMessage);
}

function updateTotalScoreOnScreen() {
	$("#total-score").html(totalScore);
}

$(".crystal-button").click(function() {
	var value = parseInt($(this).val());
	totalScore = totalScore + value;
	updateTotalScoreOnScreen();
	updateOutcomeAlertOnScreen("");

	if (totalScore > randomTargetNumber) {
		totalLosses = totalLosses + 1;
		$("#losses").html("Losses:" + totalLosses );
		updateOutcomeAlertOnScreen("You Lost!");
		reset();
	} else if(totalScore === randomTargetNumber) {
		totalWins = totalWins + 1;
		$("#wins").html("Wins:" + totalWins);
		updateOutcomeAlertOnScreen("You Win!");
		reset();
	}

});

function reset() {
	totalScore = 0;
	setButtonValues();
	setRandomTargetNumber();
	updateTotalScoreOnScreen();
	$("#target-number").html(randomTargetNumber);
}








