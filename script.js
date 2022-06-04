function rpsGame(yourChoice) {
    console.log(yourChoice);
    
   var humanChoice, botChoice;
    humanChoice = yourChoice.id;
   botChoice = numberToChoice(randToRpsInt());
   console.log("Computer choice:", botChoice);

  results = decideWinner(humanChoice, botChoice); // (0, 1) human lost but bot won
  console.log(results);

  message = finalMessage(results) // ("message": "You Won", "color": "green")
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);  
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

var yourScore = rpsDatabase[yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {"message": "You Lost", "color": "red"};
    } else if (yourScore === 0.5) {
        return {"message": "Tie", "color": "orange"};
    } else {
        return {"message": "You Won", "color": "green"};
    }
}

function rpsFrontEnd(humanImagesChoice, botImagesChoice, finalMessage) {
    var imagesDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }
}