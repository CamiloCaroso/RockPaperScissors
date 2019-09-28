var you = document.getElementById("selection");
var ia = document.getElementById("computer");

var tie = document.getElementById("tie");
var win = document.getElementById("wins");
var losses = document.getElementById("losses");
var iaChoice = ["Rock", "Paper", "Scissors"]

var tieNumber = 1;
var winNumber = 1;
var lossesNumber = 1;

document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    console.log(letter);

    if (letter == "s"){
        you.textContent = "Scissors";
    } 
    else if (letter == "r"){
        you.textContent = "Rock";
    }   
    else if (letter == "p"){
        you.textContent = "Paper";
    } 
    
    
    if (letter == "s" || letter == "r" || letter == "p"){
        var iaRandom = (iaChoice[Math.floor(Math.random() * iaChoice.length)]);
        ia.textContent = (iaRandom);
    }

    if ((letter == "r" && iaRandom == "Rock") || (letter == "s" && iaRandom == "Scissors") || (letter == "p" && iaRandom == "Paper")){
        tie.textContent = tieNumber++;
    }
    else if ((letter == "r" && iaRandom == "Scissors") || (letter == "p" && iaRandom == "Rock") || (letter == "s" && iaRandom == "Paper")){
        win.textContent = winNumber++;
    }
    else if ((letter == "p" && iaRandom == "Scissors") || (letter == "s" && iaRandom == "Rock") || (letter == "r" && iaRandom == "Paper")){
        losses.textContent = lossesNumber++;
    }
}

















