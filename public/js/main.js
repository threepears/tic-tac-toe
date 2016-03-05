let currentPlayer = "Player One";
let back;
let currentArray;
let winner = false;
let timer = 9;
let player1 = [];
let player2 = [];

let combos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

$("#container h2").html(currentPlayer + "'s Turn!");

function containsAll(needles, haystack){
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}


$(".box").click(function() {
  let currentBox = $(this);

  if (currentPlayer === "Player One") {
    back = "x.png";
  } else {
    back = "o.png";
  }

  currentBox.css({"background-image": "url(../images/" + back + ")", "background-size": "cover"});

  var boxNum = currentBox.attr("id").slice(3);

  if (currentPlayer === "Player One") {
    player1.push(parseInt(boxNum));
    currentArray = player1;
  } else {
    player2.push(parseInt(boxNum));
    currentArray = player2;
  }

  console.log("Player 1: ", player1);
  console.log("Player 2: ", player2);

  for (var i = 0; i < combos.length; i++) {
    console.log(combos[i]);
    console.log(currentArray);
    let result = containsAll(combos[i], currentArray);
    console.log(result);
    if (result === true) {
      winner = true;
      break;
    }
  }

  timer -= 1;

  if (winner === true) {
    $("#container h2").html(currentPlayer + " Wins!").css("color", "red");
  } else if (timer === 0) {
    $("#container h2").html("Game Over!").css("color", "red");
  } else if (timer === 0 && winner === true) {
    $("#container h2").html(currentPlayer + " Wins! Game Over!").css("color", "red");
  } else {
    if (timer % 2 === 0) {
      currentPlayer = "Player Two";
    } else {
      currentPlayer = "Player One";
    }
    $("#container h2").html(currentPlayer + "'s Turn!");
  }


});



