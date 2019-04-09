//Script for PIG DICE Variation
//Object defining the dice
var dice={
  sides: 6,
  roll: function(){
    var randomNumber= Math.floor(Math.random()*this.sides)+1;
    return randomNumber;
  }
}
function Gamers(player1,player2){
  this.player1 = player1;
  this.player2 = player2;
}

$(document).ready(function(){
  $("form#details").submit(function(){
    event.preventDefault();

    var player1= $("input#player1name").val();
    var player2= $("input#player2name").val();

    var newGamer = new Gamers(player1,player2);
    $("#Player1").text(newGamer.player1);
    $("#Player2").text(newGamer.player2);

  });
  $("#r1").show()
$("#h1").show()
  $("#r2").show()
$("#h2").show()
  //Scope for Player 1
  var acquired1 = 0;
  var total1 = 0;
  var dice1 = 0;
  var dice2 = 0;
  $("#h2").attr("disabled", true);
  $("#r2").attr("disabled", true);

  $("#r1").click(function(){
    dice1 =dice.roll();
    dice2 =dice.roll();

    if((dice1===1) && (dice2===1)){
      total1 = 25;
      dice1 = 0;
      dice2= 0;
      acquired1 =0;

      $("#h1").attr("disabled",false);
      $("#r1").attr("disabled",false);

      $("#h2").attr("disabled",true);
      $("#r2").attr("disabled",true);
      alert("You rolled two 1s,you've received 25 points to your total");
      $("#total1").text(total1);
    }
    if((dice1===1) || (dice2===1)){
      dice1 = 0;
      dice2 = 0;
      acquired1 = 0;
      $("#h1").attr("disabled",true);
      $("#r1").attr("disabled",true);

      $("#h2").attr("disabled",false);
      $("#r2").attr("disabled",false);
      alert("You rolled a 1,game moves to player 2");

    }
    if((dice1 === dice2) && (dice1!==1 && dice1>0)){
      acquired1 += ((dice1+dice2)*2);
      total1 += acquired1;
      $("#total1").text(total1);
      $("#dice1").text(dice1);
      $("#dice2").text(dice2);
      alert("You rolled a double! Current Dice Value multiplied by x2")
    }
    $("#dice1").text(dice1);
    $("#dice2").text(dice2);

    acquired1 += (dice1+dice2);
    $("#acquired1").text(acquired1);
  });
  $("#h1").click(function(){
    total1 += acquired1;

    $("#total1").text(total1);

    if(total1>=100){
      alert("Player 1 Wins!!")
    }else{
      dice1= 0;
      dice2= 0;
      acquired1= 0;
      $("#dice1").text(dice1);
      $("#dice2").text(dice2);
      $("#acquired1").text(acquired1);

      $("#h1").attr("disabled",true);
      $("#r1").attr("disabled",true);

      $("#h2").attr("disabled",false);
      $("#r2").attr("disabled",false);

      alert("Player 2's turn");
    }



  });

  //Scope for Player 2
    var acquired2 = 0;
    var total2 = 0;
    var die1 = 0;
    var die2 = 0;
    $("#r2").click(function(){
      die1 = dice.roll();
      die2 = dice.roll();

      if(die1===1 && die2===1){
        total2 = 25;
        die1 =0;
        die2 =0;
        acquired2 =0;
        $("#h2").attr("disabled",true);
        $("#r2").attr("disabled",true);

        $("#h1").attr("disabled",false);
        $("#r1").attr("disabled",false);
        alert("You rolled two 1s,you've received 25 points to your total");
        $("#total2").text(total2);
      }
      if(die1===1 || die2===1){
        die1 = 0;
        die2= 0;
        acquired2= 0;
        $("#h2").attr("disabled",true);
        $("#r2").attr("disabled",true);

        $("#h1").attr("disabled",false);
        $("#r1").attr("disabled",false);
        alert("You rolled a  1,game moves to player 1");
      }
      if(die1===die2 && die1!==1 && die1>0){
        acquired2 += ((die1+die2)*2);
        total2 += acquired2;
        $("#die1").text(die1);
        $("#die2").text(die2);
        $("#total2").text(total2);
        alert("You rolled a double! Current Dice value multiplied by x2")
      }
      $("#die1").text(die1);
      $("#die2").text(die2);

      acquired2 += (die1+die2);
      $("#acquired2").text(acquired2);

    });
    $("#h2").click(function(){
      total2 += acquired2;
      $("#total2").text(total2);

      if(total2>=100){
        alert("Player 2 Wins!!");
      }else{
        die1 = 0;
        die2 = 0;
        acquired2 = 0;
        $("#die1").text(die1);
        $("#die2").text(die2);
        $("#acquired2").text(acquired2);

        $("#h2").attr("disabled",true);
        $("#r2").attr("disabled",true);

        $("#h1").attr("disabled",false);
        $("#r1").attr("disabled",false);

        alert("Player 1's turn");

      }
    });

});
