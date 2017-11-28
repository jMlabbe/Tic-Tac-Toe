function startGame() {

	for(var i = 1; i <=9; i++){
		clearBoard(i);
	}
	document.turn = "X";
	document.winner = null;
	setMessage(document.turn + " starts")
}

function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

function nextMove(square) {
	if(document.winner != null) {
		setMessage(document.turn + " has won")
	}else if(square.innerText == '') {
	square.innerText = document.turn;
	changeTurn();
	} else {
		setMessage("Make another selection")
	}	
}

function changeTurn() {
	if(checkForWinner(document.turn)) {
		setMessage(document.turn + " is the winner!")
		document.winner = document.turn;
	}else if(document.turn  == "X"){
		document.turn = "O";
		setMessage(document.turn + "'s move")
	} else {
		document.turn = "X";
		setMessage(document.turn + "'s move")
	}
}

function checkForWinner(move) {
	var result = false;
	if(checkRow(1, 2, 3, move) ||
	   checkRow(4, 5, 6, move) ||
	   checkRow(7, 8, 9, move) ||
	   checkRow(1, 4, 7, move) ||
	   checkRow(2, 5, 8, move) ||
	   checkRow(3, 6, 9, move) ||
	   checkRow(1, 5, 9, move) ||
	   checkRow(3, 5, 7, move)) {
		result = true;
	}
	return result;
}

function checkRow(a, b, c, move) {
	var result = false;
	if (getSquare(a) == move && getSquare(b) == move && getSquare(c) == move){
		result = true;
	}
	return result;
}

function getSquare(number) {
	return document.getElementById("sq" + number).innerText;
}

function clearBoard(number) {
	document.getElementById("sq" + number).innerText = "";
}